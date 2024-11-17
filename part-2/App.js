function App() {
    <div>
        <tweet
            name = "Morpheus"
            username="M0rph3us"
            date={new Date().toDateString()}
            message = "None of this is real"
        />

        <tweet
            name = "Allen Smith"
            username="Agent"
            date={new Date().toDateString()}
            message = "Don't Listen to him"
        />

        <tweet
            name = "Sandy"
            username="Cheeks"
            date={new Date().toDateString()}
            message = "Bikini Bottom is real"
        />
    </div>
}