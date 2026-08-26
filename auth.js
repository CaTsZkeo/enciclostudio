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
    if (signedIn) {
        setMessage(`Sesión iniciada con ${user.email || "tu identidad autenticada"}.`);
    } else {
        setMessage("No has iniciado sesión. El sitio sigue disponible sin cuenta.");
    }
};

const getCredentials = () => ({
    email: authEmail?.value.trim() || "",
    password: authPassword?.value || ""
});

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

authSignIn?.addEventListener("click", signIn);
authSignUp?.addEventListener("click", signUp);
authSignOut?.addEventListener("click", signOut);
authPassword?.addEventListener("keydown", event => {
    if (event.key === "Enter") signIn();
});

supabase.auth.onAuthStateChange((event, session) => {
    updateAuthUI(session);
    document.dispatchEvent(new CustomEvent("enciclostudio:auth", { detail: { event, session } }));
});

const { data: { session } } = await supabase.auth.getSession();
updateAuthUI(session);

globalThis.EnciclostudioAuth = {
    client: supabase,
    getSession: () => supabase.auth.getSession(),
    getUser: () => supabase.auth.getUser(),
    signIn,
    signUp,
    signOut
};
