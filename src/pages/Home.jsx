import UserSearch from "../components/users/UserSearch"
import UserResults from "../components/users/UserResults"

function Home() {
  return (
    <>
    {/* SEARCH COMPONENT */}
        <UserSearch />
        <UserResults />
    </>
  )
}

export default Home