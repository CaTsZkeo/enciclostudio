const articulos = [

    {
        titulo: "Átomo",
        descripcion: "Unidad fundamental de la materia.",
        enlace: "Articulos/atomo.html"
    },

    {
        titulo: "Protón",
        descripcion: "Partícula subatómica con carga eléctrica positiva.",
        enlace: "Articulos/proton.html"
    },

    {
        titulo: "Neutrón",
        descripcion: "Partícula subatómica eléctricamente neutra.",
        enlace: "Articulos/neutron.html"
    },

    {
        titulo: "Electrón",
        descripcion: "Partícula subatómica con carga eléctrica negativa.",
        enlace: "Articulos/electron.html"
    },

    {
        titulo: "Partículas subatómicas",
        descripcion: "Introducción a las principales partículas que forman parte de la estructura del átomo.",
        enlace: "Articulos/particulas-subatomicas.html"
    },

    {
        titulo: "Tabla periódica",
        descripcion: "Organización de los elementos químicos según su número atómico y sus propiedades.",
        enlace: "materias/tabla-periodica.html"
    },

    {
        titulo: "Molécula",
        descripcion: "Conjunto de átomos unidos mediante enlaces químicos.",
        enlace: "#"
    }
];
const entradaBusqueda = document.getElementById("entradaBusqueda");
const botonBuscar = document.getElementById("botonBuscar");
const resultados = document.getElementById("resultados");

if (botonBuscar) {
    botonBuscar.addEventListener("click", buscar);
}
function buscar() {

    const texto = entradaBusqueda.value.toLowerCase();

    resultados.innerHTML = "";

    const encontrados = articulos.filter(function(articulo) {

        return articulo.titulo.toLowerCase().includes(texto);

    });

    if (encontrados.length === 0) {

        resultados.innerHTML = "<p>No se encontraron resultados.</p>";

        return;
    }

    encontrados.forEach(function(articulo) {

        resultados.innerHTML += `
            <div class="resultado">
                <h3>
                    <a href="${articulo.enlace}">
                        ${articulo.titulo}
                    </a>
                </h3>

                <p>
                    ${articulo.descripcion}
                </p>
            </div>
        `;

    });

}

const elementos = {

    H: {
       simbolo: "H",
       nombre: "Hidrógeno",
       numero: 1,
       masa: "1.008 u",
       categoria: "No metal",
       grupo: 1,
       periodo: 1,
       estado: "Gas",
       configuracion: "1s¹",
       articulo: "../Articulos/Elementos/hidrogeno.html"
    },

    He: {
        simbolo: "He",
        nombre: "Helio",
        numero: 2,
        masa: "4.0026 u",
        categoria: "Gas noble",
        grupo: 18,
        periodo: 1,
        estado: "Gas",
        configuracion: "1s²",
        articulo: "../Articulos/Elementos/helio.html"
    },

    Li: {
        simbolo: "Li",
        nombre: "Litio",
        numero: 3,
        masa: "6.94 u",
        categoria: "Metal alcalino",
        grupo: 1,
        periodo: 2,
        estado: "Sólido",
        configuracion: "1s² 2s¹",
        articulo: "#"
    },

    Be: {
        simbolo: "Be",
        nombre: "Berilio",
        numero: 4,
        masa: "9.0122 u",
        categoria: "Metal alcalinotérreo",
        grupo: 2,
        periodo: 2,
        estado: "Sólido",
        configuracion: "1s² 2s²",
        articulo: "#"
    },

B: {
    simbolo: "B",
    nombre: "Boro",
    numero: 5,
    masa: "10.81 u",
    categoria: "Metaloide",
    grupo: 13,
    periodo: 2,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p¹",
    articulo: "#"
},

C: {
    simbolo: "C",
    nombre: "Carbono",
    numero: 6,
    masa: "12.011 u",
    categoria: "No metal",
    grupo: 14,
    periodo: 2,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p²",
    articulo: "#"
},

N: {
    simbolo: "N",
    nombre: "Nitrógeno",
    numero: 7,
    masa: "14.007 u",
    categoria: "No metal",
    grupo: 15,
    periodo: 2,
    estado: "Gas",
    configuracion: "1s² 2s² 2p³",
    articulo: "#"
},

O: {
    simbolo: "O",
    nombre: "Oxígeno",
    numero: 8,
    masa: "15.999 u",
    categoria: "No metal",
    grupo: 16,
    periodo: 2,
    estado: "Gas",
    configuracion: "1s² 2s² 2p⁴",
    articulo: "#"
},

F: {
    simbolo: "F",
    nombre: "Flúor",
    numero: 9,
    masa: "18.998 u",
    categoria: "Halógeno",
    grupo: 17,
    periodo: 2,
    estado: "Gas",
    configuracion: "1s² 2s² 2p⁵",
    articulo: "#"
},

Ne: {
    simbolo: "Ne",
    nombre: "Neón",
    numero: 10,
    masa: "20.180 u",
    categoria: "Gas noble",
    grupo: 18,
    periodo: 2,
    estado: "Gas",
    configuracion: "1s² 2s² 2p⁶",
    articulo: "#"
},

Na: {
    simbolo: "Na",
    nombre: "Sodio",
    numero: 11,
    masa: "22.990 u",
    categoria: "Metal alcalino",
    grupo: 1,
    periodo: 3,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s¹",
    articulo: "../Articulos/Elementos/sodio.html"
},

Mg: {
    simbolo: "Mg",
    nombre: "Magnesio",
    numero: 12,
    masa: "24.305 u",
    categoria: "Metal alcalinotérreo",
    grupo: 2,
    periodo: 3,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s²",
    articulo: "#"
},

Al: {
    simbolo: "Al",
    nombre: "Aluminio",
    numero: 13,
    masa: "26.982 u",
    categoria: "Metal postransición",
    grupo: 13,
    periodo: 3,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p¹",
    articulo: "#"
},

Si: {
    simbolo: "Si",
    nombre: "Silicio",
    numero: 14,
    masa: "28.085 u",
    categoria: "Metaloide",
    grupo: 14,
    periodo: 3,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p²",
    articulo: "#"
},

P: {
    simbolo: "P",
    nombre: "Fósforo",
    numero: 15,
    masa: "30.974 u",
    categoria: "No metal",
    grupo: 15,
    periodo: 3,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p³",
    articulo: "#"
},

S: {
    simbolo: "S",
    nombre: "Azufre",
    numero: 16,
    masa: "32.06 u",
    categoria: "No metal",
    grupo: 16,
    periodo: 3,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁴",
    articulo: "#"
},

Cl: {
    simbolo: "Cl",
    nombre: "Cloro",
    numero: 17,
    masa: "35.45 u",
    categoria: "Halógeno",
    grupo: 17,
    periodo: 3,
    estado: "Gas",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁵",
    articulo: "#"
},

Ar: {
    simbolo: "Ar",
    nombre: "Argón",
    numero: 18,
    masa: "39.948 u",
    categoria: "Gas noble",
    grupo: 18,
    periodo: 3,
    estado: "Gas",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶",
    articulo: "#"
},

K: {
    simbolo: "K",
    nombre: "Potasio",
    numero: 19,
    masa: "39.098 u",
    categoria: "Metal alcalino",
    grupo: 1,
    periodo: 4,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹",
    articulo: "#"
},

Ca: {
    simbolo: "Ca",
    nombre: "Calcio",
    numero: 20,
    masa: "40.078 u",
    categoria: "Metal alcalinotérreo",
    grupo: 2,
    periodo: 4,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²",
    articulo: "#"
},

Sc: {
    simbolo: "Sc",
    nombre: "Escandio",
    numero: 21,
    masa: "44.956 u",
    categoria: "Metal de transición",
    grupo: 3,
    periodo: 4,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹",
    articulo: "#"
},

Ti: {
    simbolo: "Ti",
    nombre: "Titanio",
    numero: 22,
    masa: "47.867 u",
    categoria: "Metal de transición",
    grupo: 4,
    periodo: 4,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d²",
    articulo: "#"
},

V: {
    simbolo: "V",
    nombre: "Vanadio",
    numero: 23,
    masa: "50.942 u",
    categoria: "Metal de transición",
    grupo: 5,
    periodo: 4,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d³",
    articulo: "#"
},

Cr: {
    simbolo: "Cr",
    nombre: "Cromo",
    numero: 24,
    masa: "51.996 u",
    categoria: "Metal de transición",
    grupo: 6,
    periodo: 4,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁵",
    articulo: "#"
},

Mn: {
    simbolo: "Mn",
    nombre: "Manganeso",
    numero: 25,
    masa: "54.938 u",
    categoria: "Metal de transición",
    grupo: 7,
    periodo: 4,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁵",
    articulo: "#"
},

Fe: {
    simbolo: "Fe",
    nombre: "Hierro",
    numero: 26,
    masa: "55.845 u",
    categoria: "Metal de transición",
    grupo: 8,
    periodo: 4,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶",
    articulo: "#"
},

Co: {
    simbolo: "Co",
    nombre: "Cobalto",
    numero: 27,
    masa: "58.933 u",
    categoria: "Metal de transición",
    grupo: 9,
    periodo: 4,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁷",
    articulo: "#"
},

Ni: {
    simbolo: "Ni",
    nombre: "Níquel",
    numero: 28,
    masa: "58.693 u",
    categoria: "Metal de transición",
    grupo: 10,
    periodo: 4,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁸",
    articulo: "#"
},

Cu: {
    simbolo: "Cu",
    nombre: "Cobre",
    numero: 29,
    masa: "63.546 u",
    categoria: "Metal de transición",
    grupo: 11,
    periodo: 4,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹⁰",
    articulo: "#"
},

Zn: {
    simbolo: "Zn",
    nombre: "Zinc",
    numero: 30,
    masa: "65.38 u",
    categoria: "Metal de transición",
    grupo: 12,
    periodo: 4,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰",
    articulo: "#"
},

Ge: {
    simbolo: "Ge",
    nombre: "Germanio",
    numero: 32,
    masa: "72.630 u",
    categoria: "Metaloide",
    grupo: 14,
    periodo: 4,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p²",
    articulo: "#"
},

Ga: {
    simbolo: "Ga",
    nombre: "Galio",
    numero: 31,
    masa: "69.723 u",
    categoria: "Metal postransición",
    grupo: 13,
    periodo: 4,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p¹",
    articulo: "#"
},

As: {
    simbolo: "As",
    nombre: "Arsénico",
    numero: 33,
    masa: "74.922 u",
    categoria: "Metaloide",
    grupo: 15,
    periodo: 4,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p³",
    articulo: "#"
},

Se: {
    simbolo: "Se",
    nombre: "Selenio",
    numero: 34,
    masa: "78.971 u",
    categoria: "No metal",
    grupo: 16,
    periodo: 4,
    estado: "Sólido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁴",
    articulo: "#"
},

Br: {
    simbolo: "Br",
    nombre: "Bromo",
    numero: 35,
    masa: "79.904 u",
    categoria: "Halógeno",
    grupo: 17,
    periodo: 4,
    estado: "Líquido",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵",
    articulo: "#"
},

Kr: {
    simbolo: "Kr",
    nombre: "Kriptón",
    numero: 36,
    masa: "83.798 u",
    categoria: "Gas noble",
    grupo: 18,
    periodo: 4,
    estado: "Gas",
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶",
    articulo: "#"
},

    Rb: {
        simbolo: "Rb",
        nombre: "Rubidio",
        numero: 37,
        masa: "85.468 u",
        categoria: "Metal alcalino",
        grupo: 1,
        periodo: 5,
        estado: "Sólido",
        configuracion: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1",
        articulo: "../Articulos/Elementos/rubidio.html"
    },

    Sr: {
        simbolo: "Sr",
        nombre: "Estroncio",
        numero: 38,
        masa: "87.62 u",
        categoria: "Metal alcalinotérreo",
        grupo: 2,
        periodo: 5,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/estroncio.html"
    },

    Y: {
        simbolo: "Y",
        nombre: "Itrio",
        numero: 39,
        masa: "88.906 u",
        categoria: "Metal de transición",
        grupo: 3,
        periodo: 5,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/itrio.html"
    },

    Zr: {
        simbolo: "Zr",
        nombre: "Circonio",
        numero: 40,
        masa: "91.224 u",
        categoria: "Metal de transición",
        grupo: 4,
        periodo: 5,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/circonio.html"
    },

    Nb: {
        simbolo: "Nb",
        nombre: "Niobio",
        numero: 41,
        masa: "92.906 u",
        categoria: "Metal de transición",
        grupo: 5,
        periodo: 5,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/niobio.html"
    },

    Mo: {
        simbolo: "Mo",
        nombre: "Molibdeno",
        numero: 42,
        masa: "95.95 u",
        categoria: "Metal de transición",
        grupo: 6,
        periodo: 5,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/molibdeno.html"
    },

    Tc: {
        simbolo: "Tc",
        nombre: "Tecnecio",
        numero: 43,
        masa: "(98) u",
        categoria: "Metal de transición",
        grupo: 7,
        periodo: 5,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/tecnecio.html"
    },

    Ru: {
        simbolo: "Ru",
        nombre: "Rutenio",
        numero: 44,
        masa: "101.07 u",
        categoria: "Metal de transición",
        grupo: 8,
        periodo: 5,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/rutenio.html"
    },

    Rh: {
        simbolo: "Rh",
        nombre: "Rodio",
        numero: 45,
        masa: "102.91 u",
        categoria: "Metal de transición",
        grupo: 9,
        periodo: 5,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/rodio.html"
    },

    Pd: {
        simbolo: "Pd",
        nombre: "Paladio",
        numero: 46,
        masa: "106.42 u",
        categoria: "Metal de transición",
        grupo: 10,
        periodo: 5,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/paladio.html"
    },

    Ag: {
        simbolo: "Ag",
        nombre: "Plata",
        numero: 47,
        masa: "107.87 u",
        categoria: "Metal de transición",
        grupo: 11,
        periodo: 5,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/plata.html"
    },

    Cd: {
        simbolo: "Cd",
        nombre: "Cadmio",
        numero: 48,
        masa: "112.41 u",
        categoria: "Metal de transición",
        grupo: 12,
        periodo: 5,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/cadmio.html"
    },

    In: {
        simbolo: "In",
        nombre: "Indio",
        numero: 49,
        masa: "114.82 u",
        categoria: "Metal postransición",
        grupo: 13,
        periodo: 5,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/indio.html"
    },

    Sn: {
        simbolo: "Sn",
        nombre: "Estaño",
        numero: 50,
        masa: "118.71 u",
        categoria: "Metal postransición",
        grupo: 14,
        periodo: 5,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/estano.html"
    },

    Sb: {
        simbolo: "Sb",
        nombre: "Antimonio",
        numero: 51,
        masa: "121.76 u",
        categoria: "Metaloide",
        grupo: 15,
        periodo: 5,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/antimonio.html"
    },

    Te: {
        simbolo: "Te",
        nombre: "Telurio",
        numero: 52,
        masa: "127.60 u",
        categoria: "Metaloide",
        grupo: 16,
        periodo: 5,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/telurio.html"
    },

    I: {
        simbolo: "I",
        nombre: "Yodo",
        numero: 53,
        masa: "126.90 u",
        categoria: "Halógeno",
        grupo: 17,
        periodo: 5,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/yodo.html"
    },

    Xe: {
        simbolo: "Xe",
        nombre: "Xenón",
        numero: 54,
        masa: "131.29 u",
        categoria: "Gas noble",
        grupo: 18,
        periodo: 5,
        estado: "Gas",
        articulo: "../Articulos/Elementos/xenon.html"
    },

        Cs: {
        simbolo: "Cs",
        nombre: "Cesio",
        numero: 55,
        masa: "132.91 u",
        categoria: "Metal alcalino",
        grupo: 1,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/cesio.html"
    },

    Ba: {
        simbolo: "Ba",
        nombre: "Bario",
        numero: 56,
        masa: "137.33 u",
        categoria: "Metal alcalinotérreo",
        grupo: 2,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/bario.html"
    },

    La: {
        simbolo: "La",
        nombre: "Lantano",
        numero: 57,
        masa: "138.91 u",
        categoria: "Lantánido",
        grupo: 3,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/lantano.html"
    },

    Ce: {
        simbolo: "Ce",
        nombre: "Cerio",
        numero: 58,
        masa: "140.12 u",
        categoria: "Lantánido",
        grupo: null,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/cerio.html"
    },

    Pr: {
        simbolo: "Pr",
        nombre: "Praseodimio",
        numero: 59,
        masa: "140.91 u",
        categoria: "Lantánido",
        grupo: null,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/praseodimio.html"
    },

    Nd: {
        simbolo: "Nd",
        nombre: "Neodimio",
        numero: 60,
        masa: "144.24 u",
        categoria: "Lantánido",
        grupo: null,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/neodimio.html"
    },

    Pm: {
        simbolo: "Pm",
        nombre: "Prometio",
        numero: 61,
        masa: "(145) u",
        categoria: "Lantánido",
        grupo: null,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/prometio.html"
    },

    Sm: {
        simbolo: "Sm",
        nombre: "Samario",
        numero: 62,
        masa: "150.36 u",
        categoria: "Lantánido",
        grupo: null,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/samario.html"
    },

    Eu: {
        simbolo: "Eu",
        nombre: "Europio",
        numero: 63,
        masa: "151.96 u",
        categoria: "Lantánido",
        grupo: null,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/europio.html"
    },

    Gd: {
        simbolo: "Gd",
        nombre: "Gadolinio",
        numero: 64,
        masa: "157.25 u",
        categoria: "Lantánido",
        grupo: null,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/gadolinio.html"
    },

    Tb: {
        simbolo: "Tb",
        nombre: "Terbio",
        numero: 65,
        masa: "158.93 u",
        categoria: "Lantánido",
        grupo: null,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/terbio.html"
    },

    Dy: {
        simbolo: "Dy",
        nombre: "Disprosio",
        numero: 66,
        masa: "162.50 u",
        categoria: "Lantánido",
        grupo: null,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/disprosio.html"
    },

    Ho: {
        simbolo: "Ho",
        nombre: "Holmio",
        numero: 67,
        masa: "164.93 u",
        categoria: "Lantánido",
        grupo: null,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/holmio.html"
    },

    Er: {
        simbolo: "Er",
        nombre: "Erbio",
        numero: 68,
        masa: "167.26 u",
        categoria: "Lantánido",
        grupo: null,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/erbio.html"
    },

    Tm: {
        simbolo: "Tm",
        nombre: "Tulio",
        numero: 69,
        masa: "168.93 u",
        categoria: "Lantánido",
        grupo: null,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/tulio.html"
    },

    Yb: {
        simbolo: "Yb",
        nombre: "Iterbio",
        numero: 70,
        masa: "173.05 u",
        categoria: "Lantánido",
        grupo: null,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/iterbio.html"
    },

    Lu: {
        simbolo: "Lu",
        nombre: "Lutecio",
        numero: 71,
        masa: "174.97 u",
        categoria: "Lantánido",
        grupo: null,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/lutecio.html"
    },

    Hf: {
        simbolo: "Hf",
        nombre: "Hafnio",
        numero: 72,
        masa: "178.49 u",
        categoria: "Metal de transición",
        grupo: 4,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/hafnio.html"
    },

    Ta: {
        simbolo: "Ta",
        nombre: "Tantalio",
        numero: 73,
        masa: "180.95 u",
        categoria: "Metal de transición",
        grupo: 5,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/tantalio.html"
    },

    W: {
        simbolo: "W",
        nombre: "Wolframio",
        numero: 74,
        masa: "183.84 u",
        categoria: "Metal de transición",
        grupo: 6,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/wolframio.html"
    },

    Re: {
        simbolo: "Re",
        nombre: "Renio",
        numero: 75,
        masa: "186.21 u",
        categoria: "Metal de transición",
        grupo: 7,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/renio.html"
    },

    Os: {
        simbolo: "Os",
        nombre: "Osmio",
        numero: 76,
        masa: "190.23 u",
        categoria: "Metal de transición",
        grupo: 8,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/osmio.html"
    },

    Ir: {
        simbolo: "Ir",
        nombre: "Iridio",
        numero: 77,
        masa: "192.22 u",
        categoria: "Metal de transición",
        grupo: 9,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/iridio.html"
    },

    Pt: {
        simbolo: "Pt",
        nombre: "Platino",
        numero: 78,
        masa: "195.08 u",
        categoria: "Metal de transición",
        grupo: 10,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/platino.html"
    },

    Au: {
        simbolo: "Au",
        nombre: "Oro",
        numero: 79,
        masa: "196.97 u",
        categoria: "Metal de transición",
        grupo: 11,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/oro.html"
    },

    Hg: {
        simbolo: "Hg",
        nombre: "Mercurio",
        numero: 80,
        masa: "200.59 u",
        categoria: "Metal de transición",
        grupo: 12,
        periodo: 6,
        estado: "Líquido",
        articulo: "../Articulos/Elementos/mercurio.html"
    },

    Tl: {
        simbolo: "Tl",
        nombre: "Talio",
        numero: 81,
        masa: "204.38 u",
        categoria: "Metal postransición",
        grupo: 13,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/talio.html"
    },

    Pb: {
        simbolo: "Pb",
        nombre: "Plomo",
        numero: 82,
        masa: "207.2 u",
        categoria: "Metal postransición",
        grupo: 14,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/plomo.html"
    },

    Bi: {
        simbolo: "Bi",
        nombre: "Bismuto",
        numero: 83,
        masa: "208.98 u",
        categoria: "Metal postransición",
        grupo: 15,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/bismuto.html"
    },

    Po: {
        simbolo: "Po",
        nombre: "Polonio",
        numero: 84,
        masa: "(209) u",
        categoria: "Metal postransición",
        grupo: 16,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/polonio.html"
    },

    At: {
        simbolo: "At",
        nombre: "Astato",
        numero: 85,
        masa: "(210) u",
        categoria: "Halógeno",
        grupo: 17,
        periodo: 6,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/astato.html"
    },

    Rn: {
        simbolo: "Rn",
        nombre: "Radón",
        numero: 86,
        masa: "(222) u",
        categoria: "Gas noble",
        grupo: 18,
        periodo: 6,
        estado: "Gas",
        articulo: "../Articulos/Elementos/radon.html"
    },

    Fr: {
        simbolo: "Fr",
        nombre: "Francio",
        numero: 87,
        masa: "(223) u",
        categoria: "Metal alcalino",
        grupo: 1,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/francio.html"
    },

    Ra: {
        simbolo: "Ra",
        nombre: "Radio",
        numero: 88,
        masa: "(226) u",
        categoria: "Metal alcalinotérreo",
        grupo: 2,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/radio.html"
    },

    Ac: {
        simbolo: "Ac",
        nombre: "Actinio",
        numero: 89,
        masa: "(227) u",
        categoria: "Actínido",
        grupo: 3,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/actinio.html"
    },

    Th: {
        simbolo: "Th",
        nombre: "Torio",
        numero: 90,
        masa: "232.04 u",
        categoria: "Actínido",
        grupo: null,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/torio.html"
    },

    Pa: {
        simbolo: "Pa",
        nombre: "Protactinio",
        numero: 91,
        masa: "231.04 u",
        categoria: "Actínido",
        grupo: null,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/protactinio.html"
    },

    U: {
        simbolo: "U",
        nombre: "Uranio",
        numero: 92,
        masa: "238.03 u",
        categoria: "Actínido",
        grupo: null,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/uranio.html"
    },

    Np: {
        simbolo: "Np",
        nombre: "Neptunio",
        numero: 93,
        masa: "(237) u",
        categoria: "Actínido",
        grupo: null,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/neptunio.html"
    },

    Pu: {
        simbolo: "Pu",
        nombre: "Plutonio",
        numero: 94,
        masa: "(244) u",
        categoria: "Actínido",
        grupo: null,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/plutonio.html"
    },

    Am: {
        simbolo: "Am",
        nombre: "Americio",
        numero: 95,
        masa: "(243) u",
        categoria: "Actínido",
        grupo: null,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/americio.html"
    },

    Cm: {
        simbolo: "Cm",
        nombre: "Curio",
        numero: 96,
        masa: "(247) u",
        categoria: "Actínido",
        grupo: null,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/curio.html"
    },

    Bk: {
        simbolo: "Bk",
        nombre: "Berkelio",
        numero: 97,
        masa: "(247) u",
        categoria: "Actínido",
        grupo: null,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/berkelio.html"
    },

    Cf: {
        simbolo: "Cf",
        nombre: "Californio",
        numero: 98,
        masa: "(251) u",
        categoria: "Actínido",
        grupo: null,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/californio.html"
    },

    Es: {
        simbolo: "Es",
        nombre: "Einsteinio",
        numero: 99,
        masa: "(252) u",
        categoria: "Actínido",
        grupo: null,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/einsteinio.html"
    },

    Fm: {
        simbolo: "Fm",
        nombre: "Fermio",
        numero: 100,
        masa: "(257) u",
        categoria: "Actínido",
        grupo: null,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/fermio.html"
    },

    Md: {
        simbolo: "Md",
        nombre: "Mendelevio",
        numero: 101,
        masa: "(258) u",
        categoria: "Actínido",
        grupo: null,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/mendelevio.html"
    },

    No: {
        simbolo: "No",
        nombre: "Nobelio",
        numero: 102,
        masa: "(259) u",
        categoria: "Actínido",
        grupo: null,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/nobelio.html"
    },

    Lr: {
        simbolo: "Lr",
        nombre: "Lawrencio",
        numero: 103,
        masa: "(262) u",
        categoria: "Actínido",
        grupo: null,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/lawrencio.html"
    },

    Rf: {
        simbolo: "Rf",
        nombre: "Rutherfordio",
        numero: 104,
        masa: "(267) u",
        categoria: "Metal de transición",
        grupo: 4,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/rutherfordio.html"
    },

    Db: {
        simbolo: "Db",
        nombre: "Dubnio",
        numero: 105,
        masa: "(268) u",
        categoria: "Metal de transición",
        grupo: 5,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/dubnio.html"
    },

    Sg: {
        simbolo: "Sg",
        nombre: "Seaborgio",
        numero: 106,
        masa: "(269) u",
        categoria: "Metal de transición",
        grupo: 6,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/seaborgio.html"
    },

    Bh: {
        simbolo: "Bh",
        nombre: "Bohrio",
        numero: 107,
        masa: "(270) u",
        categoria: "Metal de transición",
        grupo: 7,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/bohrio.html"
    },

    Hs: {
        simbolo: "Hs",
        nombre: "Hassio",
        numero: 108,
        masa: "(277) u",
        categoria: "Metal de transición",
        grupo: 8,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/hassio.html"
    },

    Mt: {
        simbolo: "Mt",
        nombre: "Meitnerio",
        numero: 109,
        masa: "(278) u",
        categoria: "Metal de transición",
        grupo: 9,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/meitnerio.html"
    },

    Ds: {
        simbolo: "Ds",
        nombre: "Darmstadtio",
        numero: 110,
        masa: "(281) u",
        categoria: "Metal de transición",
        grupo: 10,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/darmstadtio.html"
    },

    Rg: {
        simbolo: "Rg",
        nombre: "Roentgenio",
        numero: 111,
        masa: "(282) u",
        categoria: "Metal de transición",
        grupo: 11,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/roentgenio.html"
    },

    Cn: {
        simbolo: "Cn",
        nombre: "Copernicio",
        numero: 112,
        masa: "(285) u",
        categoria: "Metal de transición",
        grupo: 12,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/copernicio.html"
    },

    Nh: {
        simbolo: "Nh",
        nombre: "Nihonio",
        numero: 113,
        masa: "(286) u",
        categoria: "Metal postransición",
        grupo: 13,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/nihonio.html"
    },

    Fl: {
        simbolo: "Fl",
        nombre: "Flerovio",
        numero: 114,
        masa: "(289) u",
        categoria: "Metal postransición",
        grupo: 14,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/flerovio.html"
    },

    Mc: {
        simbolo: "Mc",
        nombre: "Moscovio",
        numero: 115,
        masa: "(290) u",
        categoria: "Metal postransición",
        grupo: 15,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/moscovio.html"
    },

    Lv: {
        simbolo: "Lv",
        nombre: "Livermorio",
        numero: 116,
        masa: "(293) u",
        categoria: "Metal postransición",
        grupo: 16,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/livermorio.html"
    },

    Ts: {
        simbolo: "Ts",
        nombre: "Teneso",
        numero: 117,
        masa: "(294) u",
        categoria: "Halógeno",
        grupo: 17,
        periodo: 7,
        estado: "Sólido",
        articulo: "../Articulos/Elementos/teneso.html"
    },

    Og: {
        simbolo: "Og",
        nombre: "Oganesón",
        numero: 118,
        masa: "(294) u",
        categoria: "Gas noble",
        grupo: 18,
        periodo: 7,
        estado: "Gas",
        articulo: "../Articulos/Elementos/oganeson.html"
    },

};

function mostrarElemento(simbolo) {

    const elemento = elementos[simbolo];

    if (!elemento) {
        return;
    }

    document.getElementById("elemento-nombre").textContent =
        elemento.nombre;

    document.getElementById("elemento-simbolo").textContent =
        elemento.simbolo;

    document.getElementById("elemento-numero").textContent =
        "Número atómico: " + elemento.numero;

    document.getElementById("elemento-masa").textContent =
        "Masa atómica: " + elemento.masa;

    document.getElementById("elemento-categoria").textContent =
        "Categoría: " + elemento.categoria;

    document.getElementById("elemento-grupo").textContent =
        "Grupo: " + elemento.grupo;

    document.getElementById("elemento-periodo").textContent =
        "Período: " + elemento.periodo;

    document.getElementById("elemento-estado").textContent =
        "Estado: " + elemento.estado;

    document.getElementById("elemento-configuracion").textContent =
        "Configuración electrónica: " + elemento.configuracion;

    document.getElementById("elemento-articulo").href =
        elemento.articulo;
}

/* Enciclostudio: contenido y actividades de la portada. */
(() => {
    const seedArticles = [
        {
                "title": "El átomo: la unidad de la materia",
                "subject": "Química",
                "level": "Secundaria",
                "summary": "Conoce protones, neutrones y electrones, y cómo explican las propiedades de la materia.",
                "resource": "atomo.html"
        },
        {
                "title": "El sistema solar",
                "subject": "Astronomía",
                "level": "Primaria",
                "summary": "Explora planetas, distancias y preguntas para investigar el vecindario cósmico.",
                "resource": "sistema-solar.html"
        },
        {
                "title": "Enlaces químicos",
                "subject": "Química",
                "level": "Avanzado",
                "summary": "Compara los enlaces covalente, iónico y metálico con argumentos basados en evidencia.",
                "resource": "enlaces-quimicos.html"
        },
        {
                "title": "Moléculas: átomos que se unen",
                "subject": "Química",
                "level": "Secundaria",
                "summary": "Entiende las fórmulas químicas y cómo los enlaces crean sustancias nuevas.",
                "resource": "moleculas.html"
        },
        {
                "title": "Materia",
                "subject": "Química",
                "level": "Secundaria",
                "summary": "La materia puede estudiarse por sus propiedades, su composición y los cambios que experimenta.",
                "resource": "materia.html"
        },
        {
                "title": "Estados de la materia",
                "subject": "Química",
                "level": "Secundaria",
                "summary": "Un sólido conserva su forma, un líquido fluye y un gas ocupa el recipiente; las partículas explican esas diferencias.",
                "resource": "estados-de-la-materia.html"
        },
        {
                "title": "Propiedades de la materia",
                "subject": "Química",
                "level": "Secundaria",
                "summary": "No basta con decir que algo “parece” pesado o brillante: una propiedad útil se observa o se mide de manera reproducible.",
                "resource": "propiedades-de-la-materia.html"
        },
        {
                "title": "Sustancias puras y mezclas",
                "subject": "Química",
                "level": "Secundaria",
                "summary": "Una sustancia pura tiene composición constante; una mezcla reúne sustancias que pueden separarse por métodos físicos.",
                "resource": "sustancias-puras-y-mezclas.html"
        },
        {
                "title": "Cambios físicos y químicos",
                "subject": "Química",
                "level": "Secundaria",
                "summary": "Derretir hielo es un cambio físico. Oxidar hierro o quemar madera son cambios químicos porque aparece una composición diferente.",
                "resource": "cambios-fisicos-y-quimicos.html"
        },
        {
                "title": "Reacciones químicas",
                "subject": "Química",
                "level": "Secundaria",
                "summary": "En una ecuación química, los reactivos se transforman en productos sin que desaparezcan los átomos.",
                "resource": "reacciones-quimicas.html"
        },
        {
                "title": "Ácidos y bases",
                "subject": "Química",
                "level": "Secundaria",
                "summary": "La escala de pH ayuda a describir la acidez de una disolución, pero una medición siempre depende de las condiciones del experimento.",
                "resource": "acidos-y-bases.html"
        },
        {
                "title": "Soluciones químicas",
                "subject": "Química",
                "level": "Secundaria",
                "summary": "La concentración conecta la cantidad de soluto con el volumen o la masa de la solución.",
                "resource": "soluciones-quimicas.html"
        },
        {
                "title": "Astros",
                "subject": "Astronomía",
                "level": "Primaria",
                "summary": "Mirar el cielo es reconocer una colección de mundos, estrellas, restos rocosos y nubes de gas que se relacionan por la gravedad.",
                "resource": "astros.html"
        },
        {
                "title": "Astros del sistema solar",
                "subject": "Astronomía",
                "level": "Primaria",
                "summary": "El Sol domina la arquitectura del sistema solar, pero cada cuerpo aporta una historia diferente.",
                "resource": "astros-del-sistema-solar.html"
        },
        {
                "title": "Planeta: ¿qué es un planeta?",
                "subject": "Astronomía",
                "level": "Primaria",
                "summary": "Planeta no significa simplemente “una esfera en el espacio”: también importa cómo se mueve y qué objetos comparte con su órbita.",
                "resource": "planeta-que-es-un-planeta.html"
        },
        {
                "title": "Estrellas",
                "subject": "Astronomía",
                "level": "Primaria",
                "summary": "La luz de una estrella cuenta una historia sobre su temperatura, composición, edad y distancia.",
                "resource": "estrellas.html"
        },
        {
                "title": "Tipos de estrellas",
                "subject": "Astronomía",
                "level": "Secundaria",
                "summary": "Una clasificación no es una caja permanente: una estrella puede cambiar de tipo a medida que evoluciona.",
                "resource": "tipos-de-estrellas.html"
        },
        {
                "title": "Características de las estrellas",
                "subject": "Astronomía",
                "level": "Secundaria",
                "summary": "La masa es una de las claves principales: influye en cuánto vive una estrella y en cómo termina su evolución.",
                "resource": "caracteristicas-de-las-estrellas.html"
        },
        {
                "title": "Estrellas fugaces",
                "subject": "Astronomía",
                "level": "Primaria",
                "summary": "Una raya rápida de luz puede ser un diminuto fragmento de roca que se calienta y se desintegra en el aire.",
                "resource": "estrellas-fugaces.html"
        },
        {
                "title": "Lluvia de estrellas",
                "subject": "Astronomía",
                "level": "Primaria",
                "summary": "Las partículas entran en la atmósfera desde zonas de la órbita terrestre que se repiten cada año.",
                "resource": "lluvia-de-estrellas.html"
        },
        {
                "title": "Satélites naturales: ¿qué son?",
                "subject": "Astronomía",
                "level": "Primaria",
                "summary": "La Luna es el satélite natural de la Tierra, pero el sistema solar contiene cientos de lunas con historias muy diferentes.",
                "resource": "satelites-naturales-que-son.html"
        },
        {
                "title": "Características y tipos de satélites naturales",
                "subject": "Astronomía",
                "level": "Secundaria",
                "summary": "No existe una sola forma de ser luna: la composición, el tamaño y la órbita cuentan parte de su origen.",
                "resource": "caracteristicas-y-tipos-de-satelites-naturales.html"
        },
        {
                "title": "Satélites artificiales: ¿qué son?",
                "subject": "Astronomía",
                "level": "Primaria",
                "summary": "Estos dispositivos convierten una órbita en una herramienta para observar, comunicar, medir y explorar.",
                "resource": "satelites-artificiales-que-son.html"
        },
        {
                "title": "Cometas",
                "subject": "Astronomía",
                "level": "Primaria",
                "summary": "Cuando se acerca al Sol, parte de sus hielos se transforma en gas y crea una envoltura luminosa y una cola.",
                "resource": "cometas.html"
        },
        {
                "title": "Tipos de cometas",
                "subject": "Astronomía",
                "level": "Secundaria",
                "summary": "La frecuencia de regreso ofrece pistas sobre la región del sistema solar donde un cometa pasó la mayor parte de su vida.",
                "resource": "tipos-de-cometas.html"
        },
        {
                "title": "Partes de un cometa",
                "subject": "Astronomía",
                "level": "Primaria",
                "summary": "Núcleo, coma y cola son nombres para regiones distintas, no para piezas rígidas de una máquina.",
                "resource": "partes-de-un-cometa.html"
        },
        {
                "title": "Características de un cometa",
                "subject": "Astronomía",
                "level": "Secundaria",
                "summary": "Un cometa parece crecer al acercarse al Sol y volver a apagarse cuando se aleja.",
                "resource": "caracteristicas-de-un-cometa.html"
        },
        {
                "title": "Ejemplos de cometas",
                "subject": "Astronomía",
                "level": "Primaria",
                "summary": "Cada cometa es una cápsula de material antiguo que permite investigar los primeros tiempos del sistema solar.",
                "resource": "ejemplos-de-cometas.html"
        },
        {
                "title": "Cometa Halley",
                "subject": "Astronomía",
                "level": "Primaria",
                "summary": "Halley es especial porque distintas culturas lo registraron durante siglos y porque su regreso puede predecirse.",
                "resource": "cometa-halley.html"
        },
        {
                "title": "Asteroides",
                "subject": "Astronomía",
                "level": "Primaria",
                "summary": "No son estrellas pequeñas: son restos sólidos que reflejan la luz del Sol.",
                "resource": "asteroides.html"
        },
        {
                "title": "¿Qué es un asteroide?",
                "subject": "Astronomía",
                "level": "Primaria",
                "summary": "Su forma irregular suele revelar que su gravedad no alcanza para convertirlo en una esfera.",
                "resource": "que-es-un-asteroide.html"
        },
        {
                "title": "Tipos de asteroides",
                "subject": "Astronomía",
                "level": "Secundaria",
                "summary": "Las familias de asteroides comparten rasgos porque proceden de colisiones o de regiones comunes.",
                "resource": "tipos-de-asteroides.html"
        },
        {
                "title": "Características de los asteroides",
                "subject": "Astronomía",
                "level": "Secundaria",
                "summary": "Un asteroide puede parecer una roca quieta, pero está girando y viajando a gran velocidad por el espacio.",
                "resource": "caracteristicas-de-los-asteroides.html"
        },
        {
                "title": "Asteroides y cometas: diferencias y semejanzas",
                "subject": "Astronomía",
                "level": "Secundaria",
                "summary": "Ambos son restos de la formación del sistema solar; la diferencia más visible es que los cometas pueden desarrollar coma y cola.",
                "resource": "asteroides-y-cometas.html"
        },
        {
                "title": "¿De dónde vienen los asteroides?",
                "subject": "Astronomía",
                "level": "Secundaria",
                "summary": "No son piezas de un planeta que nunca llegó a formarse: también pueden ser restos de cuerpos que se rompieron.",
                "resource": "de-donde-vienen-los-asteroides.html"
        },
        {
                "title": "Cinturón de asteroides",
                "subject": "Astronomía",
                "level": "Primaria",
                "summary": "Aunque se dibuja como una franja compacta, la distancia entre los asteroides suele ser enorme.",
                "resource": "cinturon-de-asteroides.html"
        }
];
    const lessons = {
        primaria: [["Ciencias", "El ciclo del agua", "Lee, observa y ordena las etapas."], ["Matemáticas", "Fracciones visuales", "Aprende con dibujos y ejercicios."], ["Programación", "Mi primera página HTML", "Crea un título, un texto y un enlace."]],
        secundaria: [["Química", "Átomos y elementos", "Relaciona estructura atómica y tabla periódica."], ["Física", "Fuerzas en acción", "Resuelve retos de movimiento."], ["Programación", "Diseña con CSS", "Da color y estructura a un sitio web."]],
        avanzado: [["Astronomía", "Evolución estelar", "Analiza el ciclo de vida de una estrella."], ["Matemáticas", "Funciones y gráficas", "Modela relaciones entre variables."], ["Programación", "JavaScript interactivo", "Añade eventos, datos y lógica a la web."]]
    };
    const savedArticles = () => JSON.parse(localStorage.getItem("enciclostudio-articles") || "[]");
    const allArticles = () => [...savedArticles(), ...seedArticles];
    const safe = value => String(value || "").replace(/[&<>\"']/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"})[character]);
    function renderArticles(items = allArticles()) {
        const container = document.getElementById("articleList");
        if (!container) return;
        container.innerHTML = items.map(article => `<article class="article-card"><small>${safe(article.subject)} · ${safe(article.level)}</small><h3>${safe(article.title)}</h3><p>${safe(article.summary)}</p>${article.resource ? `<a href="${safe(article.resource)}" target="_blank" rel="noopener">Leer o abrir recurso →</a>` : "<span>Próximamente</span>"}</article>`).join("");
    }
    function renderLessons(level) {
        const container = document.getElementById("lessonList");
        if (!container) return;
        container.innerHTML = lessons[level].map((lesson, index) => `<article class="lesson-card"><span class="lesson-number">0${index + 1}</span><div><p>${lesson[0]} · ${level}</p><h3>${lesson[1]}</h3><p>${lesson[2]}</p></div><a href="#biblioteca">Estudiar →</a></article>`).join("");
    }
    document.querySelectorAll(".level-tab").forEach(button => button.addEventListener("click", () => {
        document.querySelectorAll(".level-tab").forEach(tab => { tab.classList.remove("active"); tab.setAttribute("aria-selected", "false"); }); button.classList.add("active"); button.setAttribute("aria-selected", "true"); renderLessons(button.dataset.level);
    }));
    renderLessons("primaria"); renderArticles();
    const search = () => {
        const input = document.getElementById("searchInput"), results = document.getElementById("searchResults");
        if (!input || !results) return;
        const query = input.value.trim().toLowerCase();
        if (!query) { results.innerHTML = ""; return; }
        const found = allArticles().filter(item => Object.values(item).join(" ").toLowerCase().includes(query));
        results.innerHTML = found.length ? found.map(item => `<div class="search-result"><a href="${item.resource ? safe(item.resource) : "#biblioteca"}"><strong>${safe(item.title)}</strong> · ${safe(item.subject)}</a></div>`).join("") : "<p>No encontramos resultados. Prueba con una materia o concepto más amplio.</p>";
    };
    document.getElementById("searchButton")?.addEventListener("click", search);
    document.getElementById("searchInput")?.addEventListener("keydown", event => { if (event.key === "Enter") search(); });
    const answers = ["Protón", "Electrón", "Neutrón"];
    const quiz = document.getElementById("quizOptions"), feedback = document.getElementById("quizFeedback");
    if (quiz) quiz.innerHTML = answers.map(answer => `<button class="quiz-option" type="button">${answer}</button>`).join("");
    quiz?.querySelectorAll("button").forEach(button => button.addEventListener("click", () => { const correct = button.textContent === "Electrón"; quiz.querySelectorAll("button").forEach(option => option.classList.remove("correct", "wrong")); button.classList.add(correct ? "correct" : "wrong"); feedback.textContent = correct ? "¡Correcto! Los electrones poseen carga negativa." : "Aún no. Revisa las partículas subatómicas y vuelve a intentarlo."; }));
    const dialog = document.getElementById("profileDialog"), nameInput = document.getElementById("profileName");
    document.getElementById("openProfile")?.addEventListener("click", () => { nameInput.value = localStorage.getItem("enciclostudio-name") || ""; dialog.showModal(); });
    dialog?.querySelector(".close-dialog")?.addEventListener("click", () => dialog.close());
    document.getElementById("saveProfile")?.addEventListener("click", () => { const name = nameInput.value.trim(); localStorage.setItem("enciclostudio-name", name); document.getElementById("profileStatus").textContent = name ? `¡Listo, ${name}! Tu perfil se guardó en este navegador.` : "Escribe un nombre para guardar tu perfil."; });
    document.getElementById("articleEditor")?.addEventListener("submit", event => { event.preventDefault(); const values = Object.fromEntries(new FormData(event.currentTarget)); const custom = savedArticles(); custom.unshift(values); localStorage.setItem("enciclostudio-articles", JSON.stringify(custom)); document.getElementById("editorStatus").textContent = "Artículo añadido. Ya aparece en la biblioteca de inicio de este navegador."; event.currentTarget.reset(); });
})();

/* Tabla periódica avanzada: familias, ficha y modelo de Bohr. */
(() => {
    const superscripts = { "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9" };
    const lanthanides = new Set(["La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu"]);
    const actinides = new Set(["Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr"]);
    const metalloids = new Set(["B","Si","Ge","As","Sb","Te"]);
    const reactiveNonmetals = new Set(["H","C","N","O","P","S","Se","F","Cl","Br","I","At"]);
    const postTransitionals = new Set(["Al","Ga","In","Sn","Tl","Pb","Bi","Po","Nh","Fl","Mc","Lv"]);
    function familyOf(element) {
        if (lanthanides.has(element.simbolo)) return ["lantanido", "Lantánido"];
        if (actinides.has(element.simbolo)) return ["actinido", "Actinoide"];
        if (element.numero >= 104) return ["desconocido", "Propiedades desconocidas"];
        if (element.grupo === 18) return ["noble", "Gas noble"];
        if (element.grupo === 1 && element.simbolo !== "H") return ["alcalino", "Metal alcalino"];
        if (element.grupo === 2) return ["alcalinoterreo", "Metal alcalinotérreo"];
        if (element.grupo >= 3 && element.grupo <= 12) return ["transicion", "Metal transicional"];
        if (metalloids.has(element.simbolo)) return ["metaloide", "Metaloide"];
        if (reactiveNonmetals.has(element.simbolo)) return ["no-metal", "No metal reactivo"];
        if (postTransitionals.has(element.simbolo)) return ["postransicion", "Metal postransicional"];
        return ["desconocido", "Propiedades desconocidas"];
    }
    function configurationFor(element) {
        if (element.configuracion) return element.configuracion;
        const orbitals = [["1s",2],["2s",2],["2p",6],["3s",2],["3p",6],["4s",2],["3d",10],["4p",6],["5s",2],["4d",10],["5p",6],["6s",2],["4f",14],["5d",10],["6p",6],["7s",2],["5f",14],["6d",10],["7p",6]];
        let remaining = element.numero;
        return orbitals.map(([orbital, capacity]) => { const electrons = Math.min(remaining, capacity); remaining -= electrons; return electrons ? `${orbital}${String(electrons).replace(/[0-9]/g, digit => "⁰¹²³⁴⁵⁶⁷⁸⁹"[digit])}` : ""; }).filter(Boolean).join(" ");
    }
    function shellsFor(element, configuration) {
        const shells = [];
        configuration.replace(/([1-7])[spdf]([⁰¹²³⁴⁵⁶⁷⁸⁹0-9]+)/g, (_, shell, quantity) => { const electrons = Number([...quantity].map(char => superscripts[char] ?? char).join("")); shells[Number(shell) - 1] = (shells[Number(shell) - 1] || 0) + electrons; });
        if (shells.filter(Boolean).reduce((sum, value) => sum + value, 0) === element.numero) return shells.filter(Boolean);
        const capacities = [2,8,18,32,32,18,8], fallback = []; let remaining = element.numero;
        capacities.forEach(capacity => { if (remaining) { const used = Math.min(capacity, remaining); fallback.push(used); remaining -= used; } }); return fallback;
    }
    function drawBohr(element, shells) {
        const model = document.getElementById("modelo-bohr"); if (!model) return;
        model.innerHTML = `<div class="nucleus"><b>${element.simbolo}</b><small>${element.numero} p+</small></div>`;
        shells.forEach((electrons, shellIndex) => {
            const ring = document.createElement("div"); ring.className = "bohr-shell"; ring.style.setProperty("--ring", shellIndex + 1);
            for (let index = 0; index < electrons; index += 1) { const electron = document.createElement("i"); electron.style.setProperty("--angle", `${(360 / electrons) * index}deg`); ring.appendChild(electron); }
            model.appendChild(ring);
        });
        model.onclick = () => model.classList.toggle("tilted");
        model.title = "Haz clic para girar el modelo";
    }
    window.mostrarElemento = function mostrarElementoAvanzado(simbolo) {
        const element = elementos[simbolo]; if (!element) return;
        const [familyKey, familyName] = familyOf(element), configuration = configurationFor(element), shells = shellsFor(element, configuration);
        document.querySelectorAll(".elemento").forEach(button => button.classList.toggle("selected", button.querySelector("strong")?.textContent === simbolo));
        const setText = (id, text) => { const node = document.getElementById(id); if (node) node.textContent = text; };
        setText("elemento-nombre", `${element.nombre} (${element.simbolo})`); setText("elemento-simbolo", element.simbolo);
        setText("elemento-numero", `Número atómico: ${element.numero} · protones: ${element.numero} · electrones: ${element.numero}`);
        setText("elemento-masa", `Masa atómica: ${element.masa} · neutrones aprox.: ${Math.max(0, Math.round(parseFloat(element.masa) || element.numero) - element.numero)}`);
        setText("elemento-categoria", `Familia: ${familyName}`); setText("elemento-grupo", `Grupo ${element.grupo ?? "—"} · período ${element.periodo ?? "—"}`);
        setText("elemento-periodo", `Distribución por capas: ${shells.join(" · ")}`); setText("elemento-estado", `Estado a temperatura ambiente: ${element.estado || "desconocido"}`);
        setText("elemento-configuracion", `Configuración electrónica: ${configuration}`); setText("bohr-resumen", `${element.nombre} tiene ${element.numero} electrones organizados en ${shells.length} capa${shells.length === 1 ? "" : "s"}. Haz clic en el modelo para girarlo.`);
        const link = document.getElementById("elemento-articulo"); if (link) { link.href = `elemento.html?elemento=${encodeURIComponent(simbolo)}`; link.textContent = `Leer artículo completo sobre ${element.nombre} →`; }
        drawBohr(element, shells);
    };
    document.querySelectorAll(".tabla-periodica .elemento, .tabla-series .elemento").forEach(button => {
        const symbol = button.querySelector("strong")?.textContent?.trim(), element = elementos[symbol]; if (!element) return;
        const [family] = familyOf(element); button.dataset.family = family; button.setAttribute("aria-label", `${element.nombre}, ${familyOf(element)[1]}, grupo ${element.grupo ?? "serie"}, período ${element.periodo ?? "serie"}`);
    });
    const articleTarget = document.getElementById("elementArticle");
    if (articleTarget) {
        const symbol = new URLSearchParams(location.search).get("elemento") || "H", element = elementos[symbol] || elementos.H, [familyKey, familyName] = familyOf(element), configuration = configurationFor(element), shells = shellsFor(element, configuration);
        document.title = `${element.nombre} | Enciclostudio`; articleTarget.innerHTML = `<p class="eyebrow">ELEMENTO QUÍMICO · ${familyName.toUpperCase()}</p><h1>${element.nombre} <span class="article-symbol">${element.simbolo}</span></h1><p class="article-lead">${element.nombre} es el elemento de número atómico ${element.numero}. Pertenece a la familia de ${familyName.toLowerCase()} y se ubica en el ${element.periodo ? `período ${element.periodo}` : "bloque f"}.</p><div class="element-facts"><div><b>Número atómico</b><span>${element.numero}</span></div><div><b>Masa atómica</b><span>${element.masa}</span></div><div><b>Grupo</b><span>${element.grupo ?? "Lantánidos / actínidos"}</span></div><div><b>Estado</b><span>${element.estado || "Desconocido"}</span></div></div><section class="article-section"><h2>Estructura electrónica</h2><p>Configuración electrónica: <strong>${configuration}</strong>.</p><p>En el modelo de Bohr, sus electrones se distribuyen por capas como: <strong>${shells.join(" · ")}</strong>.</p><div id="modelo-bohr" class="bohr-model article-bohr"></div></section><section class="article-section"><h2>Cómo interpretar este elemento</h2><p>El número atómico indica cuántos protones tiene su núcleo. En un átomo neutro, ese número coincide con sus electrones. La posición en la tabla permite comparar su reactividad y propiedades con las de otros elementos de su familia.</p></section><p><a class="button primary" href="../Materias/tabla-periodica.html">← Volver a la tabla periódica</a></p>`;
        drawBohr(element, shells);
    }
})();


/* Mobile navigation for the editorial shell. */
(() => {
    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("mobileMenu");
    if (!toggle || !menu) return;
    const setOpen = open => {
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
        menu.setAttribute("aria-hidden", String(!open));
        menu.classList.toggle("is-open", open);
        document.body.classList.toggle("no-scroll", open);
    };
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") setOpen(false);
    });
})();
