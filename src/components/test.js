import React from 'react'

const test = () => {
  return (
    <aside className="flex h-screen w-50 flex-col overflow-y-auto border-r bg-white px-5 py-8">
      <a href="#" className="flex items-center justify-evenly ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 48 48"
        >
          <path d="M 7.5 6 C 5.019 6 3 8.019 3 10.5 L 3 35.5 C 3 39.084 5.916 42 9.5 42 L 38.5 42 C 42.084 42 45 39.084 45 35.5 L 45 18.5 C 45 16.19 43.244 14.302781 41 14.050781 L 41 34.5 C 41 35.328 40.328 36 39.5 36 C 38.672 36 38 35.328 38 34.5 L 38 10.5 C 38 8.019 35.981 6 33.5 6 L 7.5 6 z M 10.5 15 L 30.5 15 C 31.329 15 32 15.672 32 16.5 C 32 17.328 31.329 18 30.5 18 L 10.5 18 C 9.671 18 9 17.328 9 16.5 C 9 15.672 9.671 15 10.5 15 z M 10.5 23 L 17.5 23 C 18.329 23 19 23.672 19 24.5 L 19 31.5 C 19 32.328 18.329 33 17.5 33 L 10.5 33 C 9.671 33 9 32.328 9 31.5 L 9 24.5 C 9 23.672 9.671 23 10.5 23 z M 23.5 23 L 30.5 23 C 31.329 23 32 23.672 32 24.5 C 32 25.328 31.329 26 30.5 26 L 23.5 26 C 22.671 26 22 25.328 22 24.5 C 22 23.672 22.671 23 23.5 23 z M 12 26 L 12 30 L 16 30 L 16 26 L 12 26 z M 23.5 30 L 30.5 30 C 31.329 30 32 30.672 32 31.5 C 32 32.328 31.329 33 30.5 33 L 23.5 33 C 22.671 33 22 32.328 22 31.5 C 22 30.672 22.671 30 23.5 30 z"></path>
        </svg>
        News One
      </a>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="flex flex-col flex-wrap justify-evenly">
            
            <Link to="/home">
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Home  className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Home</span>
            </a>
            </Link>
            
            <Link to="/posted">
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Newspaper className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Posted News</span>
            </a>
            </Link>

            <Link to="/add">
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <FilePlus2 className="h-5 w-10" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Add News</span>
            </a>
            </Link>
            <Link to="/profile">
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <UserCircle className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Profile</span>
            </a>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default test