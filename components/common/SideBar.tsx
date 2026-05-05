"use client"
const SideBar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">SideBar</h2>
      <nav>
        <ul>
          <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">Profile</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">Settings</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">Logout</a></li>
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar