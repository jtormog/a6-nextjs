import EstadoFactura from "./ui/EstadoFactura";

export default function Home() {
  return (
    <main>
        <EstadoFactura estado="pagada"/>
        <EstadoFactura estado="pendiente"/>
    </main>
  );
}
