import { useRouter } from "next/router";
import Link from "next/link";

const ExitButton = () => {
    return(
        <button className="exit-btn">
            <Link href="/" >
                Çıkış Yap
            </Link>
        </button>
    )
}

export default ExitButton