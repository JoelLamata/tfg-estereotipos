<script>
import green from './images/green.png'

import juguetesParaNiñas from './images/JuguetesParaNiñas.png'
import mujerExitosa from './images/mujer-exitosa.png'
import fantasy from './images/fantasy.jpg'
import marioPaper from './images/mario-paper.jpg'
import sonrisa from './images/sonrisa.jpg'

const triangle = 'polygon(50% 0%, 0% 100%, 100% 100%)'
const octagon = 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
const trapezoid = 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)'
const hexagon = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'

const Levels = {1: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0,
                        'levelDescription': {'header': 'hola header', 'body': 'hola body', 'footer': 'hola footer'}
                    },
                2: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0,
                        'levelDescription': {'header': 'hola header', 'body': 'hola body', 'footer': 'hola footer'}
                    }
                }

export default{
    Levels
}
</script>