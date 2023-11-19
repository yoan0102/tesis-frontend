export default function formatDate(fecha: string): string {
  return new Date(fecha).toLocaleDateString()
}
