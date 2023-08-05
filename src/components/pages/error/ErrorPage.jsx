import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>Error page</h1>
      <Link to="/"><button>Retourner vers la page d&apos;accueil</button></Link>
    </div>
  )
}
