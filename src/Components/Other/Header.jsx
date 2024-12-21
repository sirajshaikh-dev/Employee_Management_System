
const Header = ({changeUser,loggedInUserData, user }) => {

  const logOut = () => {
    localStorage.setItem("loggedInUser", "");
    // window.location.reload()  //Unefficient way as it reload the page
    changeUser(null);
  };

  return (
    <div className="flex items-center justify-between p-8">
      <h1 className="text-2xl font-medium text-left flex flex-col">
        Hello
        {user === "admin" ? (
          <span className="text-3xl font-semibold">
            Admin 👋
          </span>
        ) : user === "employee" ? (
          <span className="3xl font-semibold">
            {loggedInUserData?.firstName || 'Guest'} 👋
          </span>
        ) : (
          <span className="sm:text-2xl lg:text-3xl font-semibold">
            Guest 👋
          </span>
        )}
      </h1>
      <button
        onClick={logOut}
        className="bg-red-600 text-lg font-medium text-white px-3 py-1 rounded-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
