import { useRouter } from "next/router";

export default function Navbar() {
  const route = useRouter();
  const handleRedirect = () => {
    route.push("/");
  };
  return (
    <nav>
      <ul className="navbar">
        <li>
          <a href="#" onClick={handleRedirect}>
            Inicio
          </a>
        </li>
      </ul>
    </nav>
  );
}
