<script>
import JuguetesParaNiñas from './images/JuguetesParaNiñas.png'
import green from './images/green.png'
import mujerExitosa from './images/mujer-exitosa.png'

const triangle = 'polygon(50% 0%, 0% 100%, 100% 100%)'
const octagon = 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
const trapezoid = 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)'
const hexagon = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'

const Levels = {1: 
                    { 
                        'image': JuguetesParaNiñas,
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                2:
                    {
                        'image': mujerExitosa,
                        'poliForm': [trapezoid, hexagon],
                        'placeholder': 'Mujer exitosa',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                3:
                    {
                        'image': mujerExitosa,
                        'poliForm': [trapezoid, hexagon],
                        'placeholder': 'Mujer exitosa',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    }
                }

export default{
    Levels
}
</script>