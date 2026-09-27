export default function Footer() {
    const date = new Date();
    const yearNow = date.getFullYear();
  return (
    <footer className="border-gray-200 p-4 border-t-2 text-sm text-center ">
      <p>&copy; {yearNow} Boxy Generator. All rights reserved.</p>
    </footer>
  )
}
