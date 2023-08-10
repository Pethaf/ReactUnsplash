import { useGlobalContext } from "../Context";

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        const theInput = e.target.elements.search
        if (!theInput.value) return;
        setSearchTerm(theInput.value);
    }
    return (
        <section>
            <h1 className="title">Unsplash Images</h1>
            <form className="search-form" onSubmit={handleSubmit}>

                <input type="text" placeholder="cat" name="search" className="form-input search-input" />
                <button type="submit" className="btn"> search</button>
            </form>
        </section>
    )
}

export { SearchForm }