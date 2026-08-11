import Link from 'next/link';
import Cabecalho from '../cabecalho'

export default function CegonhaCagonha(){
    return <div><Cabecalho/>
        <img src="https://static.wikia.nocookie.net/digimon/images/f/f6/HerculesKabuterimon_b.jpg/revision/latest?cb=20090127181113" alt="" />
        <Link href="/golfinho">ir para goLfinho </Link>
        <br />
        <Link href="/golfinho/do-mal">ir para goLfinho mal </Link>
        <br />
        <Link href="/golfinho/do-bem">ir para goLfinho bem </Link>
    </div>
}