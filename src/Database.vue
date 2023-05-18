<script>
// Poligonos
const trapezoid = "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"
const parallelogram = "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)"
const rhombus = "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
const pentagon = "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
const hexagon = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
const heptagon = "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)"
const octagon = "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)"
const nonagon = "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)"
const decagon = "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)"

// Persona Poderosa
const defaultPersonaPoderosa = [
    "https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/ricos-1-scaled.jpg",
    "https://www.latercera.com/resizer/dou12lYS9GN5D3qWxwZESWrF3vs=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/LICI4GXEKJEDDNZZ6SNNFSX3U4.jpg",
    "https://cherry-brightspot.s3.amazonaws.com/gex.lifeandstyle/uploads/asset/asset_file/10343/frank-cover-.jpg",
    "https://s3.abcstatics.com/media/MM/2015/11/04/putin-afp_xoptimizadax--1350x900.jpg"
]
const dineroPersonaPoderosa = "https://img.freepik.com/foto-gratis/persona-poderosa-victoria-fondo-humano_1368-2023.jpg?w=2000"
const poderPersonaPoderosa = "https://www.altonivel.com.mx/assets/images/Consultoria/powerful.jpg"
const famaPersonaPoderosa = "https://ichef.bbci.co.uk/news/640/cpsprodpb/ADBC/production/_98167444_gettyimages-519436035-1.jpg"
const hombrePersonaPoderosa = "https://forbes.es/wp-content/uploads/2021/12/https___specials-images.forbesimg.com_imageserve_61af598c4bc56e3b57f5a29b_Forbes-2021-World-s-Most-Powerful-Women-List_960x0.jpg"

// Farmacia profesión
const defaultFarmaciaProfesion = [
    "https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2021/07/hombre-comprando-medicamentos-farmacia-2412975.jpg?tf=3840x",
    "https://colegioruzafa.com/wp-content/uploads/ss-1079x675.jpg",
    "https://elglobal.es/wp-content/uploads/2020/01/image_content_419719_20180615133242.jpg",
    "https://www.inside-pharmacy.com/wp-content/uploads/2020/02/inside-farmacia.jpg"
]
const bataFarmaciaProfesion = "https://farmatrading.es/wp-content/uploads/2020/03/consejos-comprar-farmacia.jpg"
const farmacoFarmaciaProfesion = "https://i.pinimg.com/originals/a7/27/f3/a727f371142cd4eb3a6c540433b3d05b.jpg"
const sanitarioFarmaciaProfesion = "https://tecnyfarma.com/wp-content/uploads/2022/03/Borrell-01-scaled-1-1.jpg"
const mujeresFarmaciaProfesion = "https://www.phmk.es/img_noticias/2022/12/FOTO4338.jpg"

// Belleza
const defaultBelleza = [
    "https://s1.ppllstatics.com/diariovasco/www/multimedia/202003/12/media/cortadas/interior_makeup_624-kqqH-U100483645388dmC-1248x770@RC.jpg",
    "https://mejorconsalud.as.com/wp-content/uploads/2016/02/tratamiento-belleza.jpg",
    "https://i.blogs.es/76d175/318208931_700294888142342_818714537198339726_n/1366_2000.jpeg",
    "https://www.hola.com/imagenes/belleza/actualidad/20210514189532/concurso-productos-cosmetica-perfumes-maquillaje/0-951-916/concurso-belleza-e.jpg",
]
const coloresBelleza = "https://clinicaarquero.es/wp-content/uploads/que-es-la-belleza_1920.jpg"
const floresBelleza = "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/04/25/16824261489972.jpg"
const cuidadosBelleza = "https://img.freepik.com/foto-gratis/mujer-hermosa-joven-flores-junto-cara_186202-5624.jpg"
const maquillajeBelleza = "https://proyectoscio.ucv.es/wp-content/uploads/2022/07/belleza-600x450.jpg"

// Emociones de un hombre
const defaultEmocionesHombre = [
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVjhHhda_lRBdDFs_kchtTtI-YKmABkhcIWs7-vL2GdtmFn5c9",
    "https://images.ecestaticos.com/OYtZzuEBNuSZLZH9bZAckzlqe9I=/0x117:2269x1393/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F157%2F9b0%2F125%2F1579b0125c11a3e63cf218840526dcc9.jpg",
    "https://img.freepik.com/foto-gratis/papa-guapo-sosteniendo-su-bebe_23-2148812275.jpg?w=2000",
    "https://bebloomers.com/wp-content/uploads/2022/04/masculinidad-toxica-1.jpg"
]
const empatiaEmocionesHombre = "https://images.ecestaticos.com/T1FgjHbsngPYr0TNwVpmaSYgzCg=/0x0:991x496/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fbbe%2F264%2Fc6e%2Fbbe264c6eeee4f45b97bf1b80d98b587.jpg"
const amorEmocionesHombre = "https://cdn2.salud180.com/sites/default/files/styles/16x9_large/public/field/image/2013/11/emociones_hombre_1.jpg"
const ternuraEmocionesHombre = "https://st2.depositphotos.com/1007966/6689/i/950/depositphotos_66899085-stock-photo-portrait-of-a-tough-guy.jpg"
const impasibleEmocionesHombre = "https://www.areahumana.es/wp-content/uploads/2015/05/los-hombres-no-lloran-710x360.jpg"

// Latinos
const defaultLatinos = [
    "https://image.pbs.org/video-assets/X74wtDP-asset-mezzanine-16x9-31QKgrY.png",
    "https://i.ytimg.com/vi/T250s_TGp8I/maxresdefault.jpg",
    "https://latino.ucla.edu/wp-content/uploads/2022/10/Latino-Population-rajiv-perera-unsplash.jpg",
    "https://elcierredigital.com/images/carpeta_gestor/archivos/2021/03/29/banda_carcel.jpg"
]
const latinoamericaLatinos = "https://b7q5h9f5.rocketcdn.me/wp-content/uploads/2022/01/a6050e55-92c2-4301-a06f-bcecd2056e68_alta-libre-aspect-ratio_default_0-1024x576.jpg"
const musicaLatinos = "https://latinoslead.org/wp-content/uploads/2022/09/ignite-lli.jpg"
const familiaLatinos = "https://media.npr.org/assets/img/2023/04/12/jg_headshot_custom-a52bc8e8983c5ad4bdc879f0e061fb704585ffe6-s1100-c50.jpg"
const criminalLatinos = "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/03/27/16483950282613.jpg"

// Personas mayores
const defaultPersonasMayores = [
    "https://www.fundacionfass.org/wp-content/uploads/2022/09/Funciones-ejecutivas-en-personas-mayores.jpg",
    "https://www.dgt.es/export/sites/web-DGT/.galleries/Images/muevete-con-seguridad/viaja-seguro/mayores/IMG-Portada.png_239029509.png",
    "https://eresmama.com/wp-content/uploads/2020/07/abuelo-leyendo-libro-nietos-banco.jpg",
    "https://www.65ymas.com/uploads/s1/29/86/51/como-ayudar-en-una-caida.jpeg",
    "https://st3.depositphotos.com/18597084/33179/i/600/depositphotos_331792536-stock-photo-asian-senior-woman-is-confused.jpg"
]
const experienciaPersonasMayores = "https://t1.uc.ltmcdn.com/es/posts/2/0/7/como_elegir_un_cuidador_para_una_persona_mayor_34702_orig.jpg"
const sabiduriaPersonasMayores = "https://susociodenegocios.com/wp-content/uploads/2020/12/joven-ensenando-a-adulto-mayor-a-usar-una-laptop.jpg"
const mentoresPersonasMayores = "https://teleasistencia.es/images/CSf9v8TF2GnquLL9mVKyPgY6vHxp6l.png"
const fragilPersonasMayores = "https://teleasistencia.es/images/nxtZuihTeOOTEgxl9PpSS6rl50LTJh.jpg"
const olvidadizoPersonasMayores = "https://www.fundacionfass.org/wp-content/uploads/2022/09/Funciones-ejecutivas-en-personas-mayores.jpg"

// Ropa de trabajo para mujeres
const defaultRopaTrabajoMujeres = [
    "https://garrampa.es/blog/wp-content/uploads/2016/08/pantalones-3-e1470208643130.jpg",
    "https://www.laboralsanantonio.com/modules/poslistcateproduct/images/1ebc4d4468eb575b26d753389df088b088e6f112_Hecho%20para%20durar.jpg",
    "https://www.ropadetrabajo.com/img/cms/Portada/uniformes_de_limpieza.jpg",
    "https://www.tuskamisetas.com/resources/images/856_33_424_m-2016_01.jpg",
    "https://www.prosegtar.com/3377-thickbox_default/pantalon-de-trabajo-para-mujer.jpg",
    "https://static.cimalp.fr/12818-large_default/pantalon-elastico-para-senderismo-y-viaje.jpg",
    "https://www.veslab.com/323-home_default/pantalon-desmontable-mujer.jpg"
]
const comodidadRopaTrabajoMujeres = "https://ae01.alicdn.com/kf/Ha46d8b86d7de469e89290c7c3b2e384bn/Uniformes-de-trabajo-para-mujer-conjunto-de-ropa-de-trabajo-para-Sauna-ba-o-de-pies.jpg_Q90.jpg_.webp"
const calidadRopaTrabajoMujeres = "https://m.media-amazon.com/images/I/711v3rCrQOL._AC_UX385_.jpg"
const practicoRopaTrabajoMujeres = "https://media.vogue.mx/photos/5d653d03279bf90008a97128/master/pass/Tendencia-ropa-de-trabajo-4.jpg"
const utilidadRopaTrabajoMujeres = "https://crisanlaboral.es/wp-content/uploads/2018/09/polo-mujer-viscosa-vestuario-trabajo-4039d.jpg"
const estiloRopaTrabajoMujeres = "https://www.dateriumsystem.com/appfiles/clientes/3/catalogo/snickers_6701-0404_5_rf280x240.jpg"
const bellezaRopaTrabajoMujeres = "https://img.freepik.com/fotos-premium/retrato-mujer-asiatica-joven-positiva-ropa-trabajo-azul-casco-tableta-tienda-industrial_274679-13049.jpg?w=2000"
const modaRopaTrabajoMujeres = "https://m.media-amazon.com/images/I/417e3UkVDEL._AC_UX385_.jpg"

// Juguetes para niñas
const defaultJuguetesParaNiñas = [
    "https://m.media-amazon.com/images/I/71s2vjqueSL._AC._SR360,460.jpg",
    "https://www.tododisca.com/wp-content/uploads/2022/12/Ninos-jugando-con-los-juguetes-que-recomienda-la-OCU-1140x703.jpg",
    "https://www.pixologic.es/wp-content/uploads/2022/10/juguetes-para-ninas-728lfc.jpg",
    "https://img.freepik.com/vector-gratis/juego-juguetes-ninos_74855-7019.jpg",
    "https://images.ecestaticos.com/xFTkhy7PODdIsxMgMzdFFKCxqfM=/0x0:640x361/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F73d%2F33f%2F35e%2F73d33f35e8b66ab404588b8a1d500879.jpg",
    "https://nh1.revoou.com/guiasdecompra/wp-content/uploads/2022/12/71aWljsnUkL-1024x1024.jpg",
    "https://cholloblog.com/wp-content/uploads/2022/08/maquillaje-520x450.jpg",
    "https://img.remediosdigitales.com/e50759/71mfb4dmbrs._ac_sl1000_/450_1000.jpeg"
]
const juegoJugueteParaNiñas = "https://www.science4you.es/3695-medium_default/lava-lamp-edicao-especial.jpg"
const pequeñoJugueteParaNiñas = "https://m.media-amazon.com/images/I/619mgIPeVQL._AC_SY355_.jpg"
const figurasJugueteParaNiñas = "https://images.squarespace-cdn.com/content/v1/5e1c4086dce55f319aac8247/5dc4b333-2c5d-4a91-9fc0-74dcab243520/Arena+viva.jpg"
const simpleJugueteParaNiñas = "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/12/16/16712187433372.jpg"
const rosaJugueteParaNiñas = "https://i1.wp.com/rodarsports.com/wp-content/uploads/2021/09/ATV-7-QUAD-2peg-1.jpg?fit=800%2C800&ssl=1"
const cocinaJugueteParaNiñas = "https://m.media-amazon.com/images/I/712P+ymjfbL._AC_SX569_.jpg"
const maquillajeJugueteParaNiñas = "https://www.criarconsentidocomun.com/wp-content/uploads/2022/12/juguetes-para-ninos-de-6-a-8-anos-15-e1669829717395.jpg"
const cuidadoJugueteParaNiñas = "https://cdn-vtech-jouets.vtech.com/assets/f17eb4b2-fe4a-4268-b820-a12f02f3f975/Pablito-mi-primer-mu%C3%B1eco-de-trapo-80-546922-PRINCIPAL.jpg?size=m"

const Levels = {
    1:
    {
        "placeholder": "Persona poderosa",
        "defaultImages": defaultPersonaPoderosa,
        "replacementImages": [
            { "image": dineroPersonaPoderosa, "label": "Dinero", "replacementIndex": 0 },
            { "image": poderPersonaPoderosa, "label": "Poder", "replacementIndex": 1 },
            { "image": famaPersonaPoderosa, "label": "Fama", "replacementIndex": 2 },
            { "image": hombrePersonaPoderosa, "label": "Hombre", "replacementIndex": 3 }
        ],
        "poliForm": [trapezoid, parallelogram],
        "poliNum": 3,
        "badPoliNum": 1,
        "poliText": ["Dinero", "Poder", "Fama"],
        "badPoliText": ["Hombre"],
        "points": 0,
        "levelDescription": { "header": "Nivel 1", "body": "¡Oh, no! Parece que el algoritmo no está mostrando lo que es una Persona poderosa correctamente.", "footer": "Por favor, ¡Arréglalo! Para ello, encuentra la característica que no se relacione con el tema y ¡elimina la!" },
        "endLevelDescription": { "header": "¡Buen trabajo!", "body": "El algoritmo ha creído que una persona poderosa solo puede ser un hombre." }
    },
    2:
    {
        "placeholder": "Farmacia profesión",
        "defaultImages": defaultFarmaciaProfesion,
        "replacementImages": [
            { "image": bataFarmaciaProfesion, "label": "Bata", "replacementIndex": 0 },
            { "image": farmacoFarmaciaProfesion, "label": "Fármaco", "replacementIndex": 1 },
            { "image": sanitarioFarmaciaProfesion, "label": "Sanitario", "replacementIndex": 2 },
            { "image": mujeresFarmaciaProfesion, "label": "Mujeres", "replacementIndex": 3 }
        ],
        "poliForm": [pentagon, hexagon],
        "poliNum": 3,
        "badPoliNum": 1,
        "poliText": ["Bata", "Fármaco", "Sanitario"],
        "badPoliText": ["Mujeres"],
        "points": 0,
        "levelDescription": { "header": "Nivel 2", "body": "El algoritmo está mostrando de manera equivocada la profesión de farmacia.", "footer": "¡Hay que solucionarlo!" },
        "endLevelDescription": { "header": "¡Muy bien visto!", "body": "La profesión de farmacia no se asocia solo con las mujeres." }
    },
    3:
    {
        "placeholder": "Belleza",
        "defaultImages": defaultBelleza,
        "replacementImages": [
            { "image": coloresBelleza, "label": "Colores", "replacementIndex": 0 },
            { "image": cuidadosBelleza, "label": "Cuidados", "replacementIndex": 2 },
            { "image": floresBelleza, "label": "Flores", "replacementIndex": 3 },
            { "image": maquillajeBelleza, "label": "Maquillaje", "replacementIndex": 1 },
        ],
        "poliForm": [hexagon, pentagon],
        "poliNum": 3,
        "badPoliNum": 1,
        "poliText": ["Colores", "Flores", "Cuidados"],
        "badPoliText": ["Maquillaje"],
        "points": 0,
        "levelDescription": { "header": "Nivel 3", "body": "Parece que hay otro error en el algoritmo, esta vez con la belleza.", "footer": "¡Hay que hacer algo!" },
        "endLevelDescription": { "header": "¡Bien hecho!", "body": "La belleza no se debería basar en el maquillaje." }
    },
    4:
    {
        "placeholder": "Emociones de un hombre",
        "defaultImages": defaultEmocionesHombre,
        "replacementImages": [
            { "image": empatiaEmocionesHombre, "label": "Empatia", "replacementIndex": 0 },
            { "image": amorEmocionesHombre, "label": "Amor", "replacementIndex": 1 },
            { "image": ternuraEmocionesHombre, "label": "Ternura", "replacementIndex": 2 },
            { "image": impasibleEmocionesHombre, "label": "Impasible", "replacementIndex": 3 }
        ],
        "poliForm": [hexagon, heptagon],
        "poliNum": 3,
        "badPoliNum": 1,
        "poliText": ["Empatia", "Amor", "Ternura"],
        "badPoliText": ["Impasible"],
        "points": 0,
        "levelDescription": { "header": "Nivel 4", "body": "Nos enfrentamos a otro desafío: el algoritmo está distorsionando las emociones de un hombre.", "footer": "¡Vamos a solucionarlo!" },
        "endLevelDescription": { "header": "¡Gran trabajo!", "body": "Los hombres no deberían de ser siempre impasible." }
    },
    5:
    {
        "placeholder": "Latinos",
        "defaultImages": defaultLatinos,
        "replacementImages": [
            { "image": latinoamericaLatinos, "label": "Latinoamérica", "replacementIndex": 0 },
            { "image": musicaLatinos, "label": "Música", "replacementIndex": 1 },
            { "image": familiaLatinos, "label": "Familia", "replacementIndex": 2 },
            { "image": criminalLatinos, "label": "Criminal", "replacementIndex": 3 }
        ],
        "poliForm": [heptagon, octagon],
        "poliNum": 3,
        "badPoliNum": 1,
        "poliText": ["Latinoamérica", "Música", "Familia"],
        "badPoliText": ["Criminal"],
        "points": 0,
        "levelDescription": { "header": "Nivel 5", "body": "¡Otro problema con el algoritmo! Está mostrando características erróneas sobre los latinos.", "footer": "¡Hay que arreglarlo!" },
        "endLevelDescription": { "header": "¡Increíble!", "body": "El algoritmo estaba representando a los latinos como criminales." }
    },
    6:
    {
        "placeholder": "Personas mayores",
        "defaultImages": defaultPersonasMayores,
        "replacementImages": [
            { "image": experienciaPersonasMayores, "label": "Experiencia", "replacementIndex": 0 },
            { "image": sabiduriaPersonasMayores, "label": "Sabiduría", "replacementIndex": 1 },
            { "image": mentoresPersonasMayores, "label": "Mentores", "replacementIndex": 2 },
            { "image": fragilPersonasMayores, "label": "Frágil", "replacementIndex": 3 },
            { "image": olvidadizoPersonasMayores, "label": "Olvidadizo", "replacementIndex": 4 }
        ],
        "poliForm": [nonagon, octagon],
        "poliNum": 3,
        "badPoliNum": 2,
        "poliText": ["Experiencia", "Sabiduría", "Mentores"],
        "badPoliText": ["Frágil", "Olvidadizo"],
        "points": 0,
        "levelDescription": { "header": "Nivel 6", "body": "El algoritmo está representando de forma errónea a las personas mayores, lo cual es problemático.", "footer": "¡Es momento de solucionarlo!" },
        "endLevelDescription": { "header": "¡Muy bien!", "body": "Las personas mayores no deberían ser definidas como olvidadizas y frágiles." }
    },
    7:
    {
        "placeholder": "Ropa de trabajo para mujeres",
        "defaultImages": defaultRopaTrabajoMujeres,
        "replacementImages": [
            { "image": comodidadRopaTrabajoMujeres, "label": "Comodidad", "replacementIndex": 0 },
            { "image": calidadRopaTrabajoMujeres, "label": "Calidad", "replacementIndex": 1 },
            { "image": practicoRopaTrabajoMujeres, "label": "Practico", "replacementIndex": 2 },
            { "image": utilidadRopaTrabajoMujeres, "label": "Utilidad", "replacementIndex": 3 },
            { "image": estiloRopaTrabajoMujeres, "label": "Estilo", "replacementIndex": 4 },
            { "image": bellezaRopaTrabajoMujeres, "label": "Belleza", "replacementIndex": 5 },
            { "image": modaRopaTrabajoMujeres, "label": "Moda", "replacementIndex": 6 }
        ],
        "poliForm": [nonagon, decagon],
        "poliNum": 4,
        "badPoliNum": 3,
        "poliText": ["Comodidad", "Calidad", "Practico", "Utilidad"],
        "badPoliText": ["Estilo", "Belleza", "Moda"],
        "points": 0,
        "levelDescription": { "header": "Nivel 7", "body": "Hay que solucionar los resultados que se muestran sobre la ropa de trabajo para mujeres.", "footer": "¡Vamos a ello!" },
        "endLevelDescription": { "header": "¡Impresionante!", "body": "La ropa de trabajo no se debería de asociar con el estilo, la belleza y la moda." }
    },
    8:
    {
        "placeholder": "Juguetes para niñas",
        "defaultImages": defaultJuguetesParaNiñas,
        "replacementImages": [
            { "image": juegoJugueteParaNiñas, "label": "Juego", "replacementIndex": 0 },
            { "image": pequeñoJugueteParaNiñas, "label": "Paqueño", "replacementIndex": 1 },
            { "image": figurasJugueteParaNiñas, "label": "Figuras", "replacementIndex": 2 },
            { "image": simpleJugueteParaNiñas, "label": "Simple", "replacementIndex": 3 },
            { "image": rosaJugueteParaNiñas, "label": "Rosa", "replacementIndex": 4 },
            { "image": cocinaJugueteParaNiñas, "label": "Cocina", "replacementIndex": 5 },
            { "image": maquillajeJugueteParaNiñas, "label": "Maquillaje", "replacementIndex": 6 },
            { "image": cuidadoJugueteParaNiñas, "label": "Cuidado", "replacementIndex": 7 }
        ],
        "poliForm": [decagon, nonagon],
        "poliNum": 4,
        "badPoliNum": 4,
        "poliText": ["Comodidad", "Calidad", "Figuras", "Simple"],
        "badPoliText": ["Rosa", "Cocina", "Maquillaje", "Cuidado"],
        "points": 0,
        "levelDescription": { "header": "Nivel 8", "body": "¡Oh no! Está mostrando imágenes que no tocan de juguetes para niñas.", "footer": "¡Rápido, hay que solucionarlo!" },
        "endLevelDescription": { "header": "¡Magnifico!", "body": "Los juguetes para niñas no se deberían representar con el color rosa, ni deberían estar solo enfocados a la cocina, la belleza y el cuidado." }
    },
}

export default {
    Levels
}
</script>