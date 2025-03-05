export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center text-gray-300">
        <p>&copy; {new Date().getFullYear()} Aampere. All rights reserved.</p>
      </div>
    </footer>
  )
}
