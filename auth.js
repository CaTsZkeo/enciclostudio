import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://jcwulywnznutohwcubgd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_9oglfww2WbgAr7G0V1iiiw_KP53Stna";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
    }
});

const authStatus = document.getElementById("authStatus");
const authEmail = document.getElementById("authEmail");
const authPassword = document.getElementById("authPassword");
const authSignIn = document.getElementById("authSignIn");
const authSignUp = document.getElementById("authSignUp");
const authSignOut = document.getElementById("authSignOut");
const authIdentity = document.getElementById("authIdentity");
const authUserId = document.getElementById("authUserId");
const authSubmitStatus = document.getElementById("authSubmitStatus");
const remoteProfilePanel = document.getElementById("remoteProfilePanel");
const remoteProfileDisplayName = document.getElementById("remoteProfileDisplayName");
const remoteProfileAvatar = document.getElementById("remoteProfileAvatar");
const remoteProfileBio = document.getElementById("remoteProfileBio");
const useLocalProfileName = document.getElementById("useLocalProfileName");
const loadRemoteProfileButton = document.getElementById("loadRemoteProfile");
const saveRemoteProfileButton = document.getElementById("saveRemoteProfile");
const remoteProfileStatus = document.getElementById("remoteProfileStatus");

const PROFILE_COLUMNS = "user_id,display_name,avatar,bio,created_at,updated_at";
let currentRemoteProfile = null;
let remoteProfileRequestId = 0;

const setMessage = (message, isError = false) => {
    if (!authStatus) return;
    authStatus.textContent = message;
    authStatus.dataset.state = isError ? "error" : "ready";
};

const setSubmitMessage = (message, isError = false) => {
    if (!authSubmitStatus) return;
    authSubmitStatus.textContent = message;
    authSubmitStatus.dataset.state = isError ? "error" : "ready";
};

const setRemoteProfileMessage = (message, isError = false) => {
    if (!remoteProfileStatus) return;
    remoteProfileStatus.textContent = message;
    remoteProfileStatus.dataset.state = isError ? "error" : "ready";
};

const clearRemoteProfileForm = () => {
    currentRemoteProfile = null;
    if (remoteProfileDisplayName) remoteProfileDisplayName.value = "";
    if (remoteProfileAvatar) remoteProfileAvatar.value = "";
    if (remoteProfileBio) remoteProfileBio.value = "";
    setRemoteProfileMessage("");
};

const updateAuthUI = (session) => {
    const user = session?.user || null;
    const signedIn = Boolean(user);
    if (authSignIn) authSignIn.hidden = signedIn;
    if (authSignUp) authSignUp.hidden = signedIn;
    if (authSignOut) authSignOut.hidden = !signedIn;
    if (authEmail) authEmail.hidden = signedIn;
    if (authPassword) authPassword.hidden = signedIn;
    if (authIdentity) authIdentity.hidden = !signedIn;
    if (authUserId) authUserId.textContent = user?.id || "";
    if (remoteProfilePanel) remoteProfilePanel.hidden = !signedIn;
    if (signedIn) {
        setMessage(`Sesión iniciada con ${user.email || "tu identidad autenticada"}.`);
    } else {
        remoteProfileRequestId += 1;
        if (authPassword) authPassword.value = "";
        clearRemoteProfileForm();
        setMessage("No has iniciado sesión. El sitio sigue disponible sin cuenta.");
    }
};

const getCredentials = () => ({
    email: authEmail?.value.trim() || "",
    password: authPassword?.value || ""
});

const getAuthenticatedUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    return { user: data?.user || null, error };
};

const loadRemoteProfile = async ({ quiet = false } = {}) => {
    const requestId = ++remoteProfileRequestId;
    const { user, error: userError } = await getAuthenticatedUser();
    if (requestId !== remoteProfileRequestId) return { data: null, error: null };
    if (userError || !user) {
        clearRemoteProfileForm();
        if (!quiet) setRemoteProfileMessage("Inicia sesión para consultar tu perfil remoto.", true);
        return { data: null, error: userError || new Error("No hay una sesión autenticada.") };
    }

    if (!quiet) setRemoteProfileMessage("Cargando perfil remoto…");
    const { data: rows, error } = await supabase
        .from("profiles")
        .select(PROFILE_COLUMNS)
        .eq("user_id", user.id)
        .limit(1);
    if (requestId !== remoteProfileRequestId) return { data: null, error: null };
    if (error) {
        setRemoteProfileMessage(error.message, true);
        return { data: null, error };
    }

    const data = rows?.[0] || null;
    currentRemoteProfile = data || null;
    if (remoteProfileDisplayName) remoteProfileDisplayName.value = data?.display_name || "";
    if (remoteProfileAvatar) remoteProfileAvatar.value = data?.avatar || "";
    if (remoteProfileBio) remoteProfileBio.value = data?.bio || "";
    setRemoteProfileMessage(data ? "Perfil remoto cargado." : "Aún no existe un perfil remoto. Puedes crear uno al guardarlo.");
    return { data, error: null };
};

const saveRemoteProfile = async () => {
    const { user, error: userError } = await getAuthenticatedUser();
    if (userError || !user) {
        setRemoteProfileMessage("Inicia sesión para guardar un perfil remoto.", true);
        return { data: null, error: userError || new Error("No hay una sesión autenticada.") };
    }

    saveRemoteProfileButton?.setAttribute("aria-busy", "true");
    setRemoteProfileMessage("Guardando perfil remoto…");
    const profileValues = {
        display_name: remoteProfileDisplayName?.value.trim() || null,
        avatar: remoteProfileAvatar?.value.trim() || null,
        bio: remoteProfileBio?.value.trim() || null
    };

    const result = await supabase
        .from("profiles")
        .upsert({ user_id: user.id, ...profileValues }, { onConflict: "user_id" })
        .select(PROFILE_COLUMNS)
        .single();
    saveRemoteProfileButton?.removeAttribute("aria-busy");

    if (result.error) {
        setRemoteProfileMessage(result.error.message, true);
        return { data: null, error: result.error };
    }
    currentRemoteProfile = result.data;
    if (remoteProfileDisplayName) remoteProfileDisplayName.value = result.data?.display_name || "";
    if (remoteProfileAvatar) remoteProfileAvatar.value = result.data?.avatar || "";
    if (remoteProfileBio) remoteProfileBio.value = result.data?.bio || "";
    setRemoteProfileMessage("Perfil remoto guardado correctamente.");
    return { data: result.data, error: null };
};

const copyLocalNameToRemoteDraft = () => {
    const localName = localStorage.getItem("enciclostudio-name")?.trim() || "";
    if (!localName) {
        setRemoteProfileMessage("No hay un nombre local guardado en este navegador.", true);
        return;
    }
    if (remoteProfileDisplayName) remoteProfileDisplayName.value = localName;
    setRemoteProfileMessage("Nombre local cargado como borrador. Pulsa Guardar perfil remoto para confirmarlo.");
};

const signIn = async () => {
    const { email, password } = getCredentials();
    if (!email || !password) {
        setSubmitMessage("Escribe email y contraseña para iniciar sesión.", true);
        return;
    }
    authSignIn?.setAttribute("aria-busy", "true");
    setSubmitMessage("Comprobando la sesión…");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    authSignIn?.removeAttribute("aria-busy");
    if (error) {
        setSubmitMessage(error.message, true);
        return;
    }
    setSubmitMessage("Sesión iniciada correctamente.");
};

const signUp = async () => {
    const { email, password } = getCredentials();
    if (!email || !password) {
        setSubmitMessage("Escribe email y contraseña para crear una cuenta.", true);
        return;
    }
    authSignUp?.setAttribute("aria-busy", "true");
    setSubmitMessage("Creando la cuenta…");
    const { data, error } = await supabase.auth.signUp({ email, password });
    authSignUp?.removeAttribute("aria-busy");
    if (error) {
        setSubmitMessage(error.message, true);
        return;
    }
    if (data.session) {
        setSubmitMessage("Cuenta creada y sesión iniciada.");
    } else {
        setSubmitMessage("Cuenta creada. Revisa tu email si el proyecto requiere confirmación.");
    }
};

const signOut = async () => {
    authSignOut?.setAttribute("aria-busy", "true");
    setSubmitMessage("Cerrando sesión…");
    const { error } = await supabase.auth.signOut();
    authSignOut?.removeAttribute("aria-busy");
    if (error) {
        setSubmitMessage(error.message, true);
        return;
    }
    setSubmitMessage("Sesión cerrada.");
};

const scheduleRemoteProfileLoad = () => {
    window.setTimeout(() => {
        void loadRemoteProfile({ quiet: true });
    }, 0);
};

authSignIn?.addEventListener("click", signIn);
authSignUp?.addEventListener("click", signUp);
authSignOut?.addEventListener("click", signOut);
loadRemoteProfileButton?.addEventListener("click", () => { void loadRemoteProfile(); });
saveRemoteProfileButton?.addEventListener("click", () => { void saveRemoteProfile(); });
useLocalProfileName?.addEventListener("click", copyLocalNameToRemoteDraft);
authPassword?.addEventListener("keydown", event => {
    if (event.key === "Enter") signIn();
});

supabase.auth.onAuthStateChange((event, session) => {
    updateAuthUI(session);
    document.dispatchEvent(new CustomEvent("enciclostudio:auth", { detail: { event, session } }));
    if (session) scheduleRemoteProfileLoad();
});

const { data: { session } } = await supabase.auth.getSession();
updateAuthUI(session);
if (session) scheduleRemoteProfileLoad();

globalThis.EnciclostudioAuth = {
    client: supabase,
    getSession: () => supabase.auth.getSession(),
    getUser: () => supabase.auth.getUser(),
    getProfile: loadRemoteProfile,
    loadProfile: loadRemoteProfile,
    saveProfile: saveRemoteProfile,
    signIn,
    signUp,
    signOut
};
