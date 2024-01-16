import Link from "next/link"

export default function Header () {
    return(
        <header>
            <div>Header area</div>
            <Link href={'/'}>home</Link>
        </header>
    )

}