const SearchBar = () => {
    return (
        <div className="bg-[#292929] w-full rounded-3xl py-2 px-4 flex gap-4 items-center">
            <svg
                width="20"
                height="20"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M21.3907 21.5599L26.6004 26.5999M24.9204 13.1599C24.9204 19.6548 19.6553 24.9199 13.1604 24.9199C6.66552 24.9199 1.40039 19.6548 1.40039 13.1599C1.40039 6.66503 6.66552 1.3999 13.1604 1.3999C19.6553 1.3999 24.9204 6.66503 24.9204 13.1599Z"
                    stroke="#ADADAD"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                />
            </svg>

            <input
                type="text"
                className="outline-none bg-transparent py-1 placeholder:text-[#ADADAD] text-zinc-300 flex-1"
                placeholder="Search app to add"
            />
        </div>
    );
};

export default SearchBar;
