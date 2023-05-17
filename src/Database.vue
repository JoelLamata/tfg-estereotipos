<script>
import green from "./images/green.png"

import juguetesParaNiñas from "./images/JuguetesParaNiñas.png"
import mujerExitosa from "./images/mujer-exitosa.png"
import fantasy from "./images/fantasy.jpg"
import marioPaper from "./images/mario-paper.jpg"
import sonrisa from "./images/sonrisa.jpg"

// Poligonos
const triangle = "polygon(50% 0%, 0% 100%, 100% 100%)"
const octagon = "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)"
const trapezoid = "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"
const hexagon = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"

// Persona Poderosa
const defaultImagesPersonaPoderosa = [
    "https://cherry-brightspot.s3.amazonaws.com/gex.lifeandstyle/uploads/asset/asset_file/10343/frank-cover-.jpg",
    "https://s3.abcstatics.com/media/MM/2015/11/04/putin-afp_xoptimizadax--1350x900.jpg",
    "https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/ricos-1-scaled.jpg",
    "https://ichef.bbci.co.uk/news/1024/branded_mundo/1098B/production/_101297976_p066x3d2.jpg"
]
const dineroPersonaPoderosa = ""
const poderPersonaPoderosa = ""
const famaPersonaPoderosa = "https://ichef.bbci.co.uk/news/640/cpsprodpb/ADBC/production/_98167444_gettyimages-519436035-1.jpg"
const hombrePersonaPoderosa = "https://forbes.es/wp-content/uploads/2021/12/https___specials-images.forbesimg.com_imageserve_61af598c4bc56e3b57f5a29b_Forbes-2021-World-s-Most-Powerful-Women-List_960x0.jpg"

// Farmacia profesión

// Belleza
const defaultImagesBelleza = [
    "https://s1.ppllstatics.com/diariovasco/www/multimedia/202003/12/media/cortadas/interior_makeup_624-kqqH-U100483645388dmC-1248x770@RC.jpg",
    "https://mejorconsalud.as.com/wp-content/uploads/2016/02/tratamiento-belleza.jpg",
    "https://i.blogs.es/76d175/318208931_700294888142342_818714537198339726_n/1366_2000.jpeg",
    "https://www.hola.com/imagenes/belleza/actualidad/20210514189532/concurso-productos-cosmetica-perfumes-maquillaje/0-951-916/concurso-belleza-e.jpg",
]
const coloresBelleza = "https://clinicaarquero.es/wp-content/uploads/que-es-la-belleza_1920.jpg"
const floresBelleza = "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/04/25/16824261489972.jpg"
const cuidadosBelleza = "https://img.freepik.com/foto-gratis/mujer-hermosa-joven-flores-junto-cara_186202-5624.jpg"
const maquillajeBelleza = "https://proyectoscio.ucv.es/wp-content/uploads/2022/07/belleza-600x450.jpg"

// Juguetes para niñas
const defaultImagesJuguetesParaNiñas = [
    "https://nh1.revoou.com/guiasdecompra/wp-content/uploads/2022/12/71aWljsnUkL-1024x1024.jpg",
    "https://cholloblog.com/wp-content/uploads/2022/08/maquillaje-520x450.jpg",
    "https://images.ecestaticos.com/xFTkhy7PODdIsxMgMzdFFKCxqfM=/0x0:640x361/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F73d%2F33f%2F35e%2F73d33f35e8b66ab404588b8a1d500879.jpg",
    "https://www.pixologic.es/wp-content/uploads/2022/10/juguetes-para-ninas-728lfc.jpg",
    "https://www.tododisca.com/wp-content/uploads/2022/12/Ninos-jugando-con-los-juguetes-que-recomienda-la-OCU-1140x703.jpg",
    "https://m.media-amazon.com/images/I/71s2vjqueSL._AC._SR360,460.jpg",
    "https://img.freepik.com/vector-gratis/juego-juguetes-ninos_74855-7019.jpg",
    "https://img.remediosdigitales.com/e50759/71mfb4dmbrs._ac_sl1000_/450_1000.jpeg"
]
const Levels = {
    1:
    {
        "defaultImages": defaultImagesBelleza,
        "replacementImages": [
            { "image": coloresBelleza, "label": "Colores", "replacementIndex": 0 },
            { "image": floresBelleza, "label": "Flores", "replacementIndex": 3 },
            { "image": cuidadosBelleza, "label": "Cuidados", "replacementIndex": 1 },
            { "image": maquillajeBelleza, "label": "Maquillaje", "replacementIndex": 2 }
        ],
        "poliForm": [octagon, hexagon],
        "placeholder": "Belleza",
        "poliNum": 3,
        "badPoliNum": 1,
        "poliText": ["Colores", "Flores", "Cuidados"],
        "badPoliText": ["Maquillaje"],
        "points": 0,
        "levelDescription": { "header": "hola header", "body": "hola body", "footer": "hola footer" }
    },
    2:
    {
        "defaultImages": defaultImagesJuguetesParaNiñas,
        "replacementImages": [
            { "image": coloresBelleza, "label": "Colores", "replacementIndex": 0 },
            { "image": floresBelleza, "label": "Flores", "replacementIndex": 3 },
            { "image": cuidadosBelleza, "label": "Cuidados", "replacementIndex": 1 },
            { "image": maquillajeBelleza, "label": "Maquillaje", "replacementIndex": 2 }
        ],
        "poliForm": [octagon, hexagon],
        "placeholder": "Belleza",
        "poliNum": 3,
        "badPoliNum": 1,
        "poliText": ["Colores", "Flores", "Cuidados"],
        "badPoliText": ["Maquillaje"],
        "points": 0,
        "levelDescription": { "header": "hola header", "body": "hola body", "footer": "hola footer" }
    },
}

export default {
    Levels
}
</script>