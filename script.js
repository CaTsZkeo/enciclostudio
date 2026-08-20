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
        { title: "El átomo: la unidad de la materia", subject: "Química", level: "Secundaria", summary: "Conoce protones, neutrones y electrones, y cómo explican las propiedades de la materia.", resource: "Articulos/atomo.html" },
        { title: "Cómo medir el universo", subject: "Astronomía", level: "Primaria", summary: "Un recorrido por las escalas que usamos para comprender planetas, estrellas y galaxias." },
        { title: "Primer sitio web con HTML", subject: "Programación", level: "Primaria", summary: "Construye la estructura de una página y entiende las etiquetas esenciales." },
        { title: "Energía y movimiento", subject: "Física", level: "Secundaria", summary: "Relaciona fuerza, masa y aceleración mediante ejemplos cotidianos." },
        { title: "Patrones y fracciones", subject: "Matemáticas", level: "Primaria", summary: "Representa partes de un todo y reconoce patrones numéricos." },
        { title: "Placas tectónicas", subject: "Geología", level: "Avanzado", summary: "Explica cómo se forman terremotos, montañas y volcanes a partir de la dinámica terrestre." }
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
        document.querySelectorAll(".level-tab").forEach(tab => tab.classList.remove("active")); button.classList.add("active"); renderLessons(button.dataset.level);
    }));
    renderLessons("primaria"); renderArticles();
    const search = () => {
        const input = document.getElementById("searchInput"), results = document.getElementById("searchResults");
        if (!input || !results) return;
        const query = input.value.trim().toLowerCase();
        if (!query) { results.innerHTML = ""; return; }
        const found = allArticles().filter(item => Object.values(item).join(" ").toLowerCase().includes(query));
        results.innerHTML = found.length ? found.map(item => `<div class="search-result"><a href="#biblioteca"><strong>${safe(item.title)}</strong> · ${safe(item.subject)}</a></div>`).join("") : "<p>No encontramos resultados. Prueba con una materia o concepto más amplio.</p>";
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
