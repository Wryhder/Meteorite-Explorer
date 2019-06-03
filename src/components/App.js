class Header extends React.Component {
    render() {
        return (
            <h1 className="header">Meteorite Explorer</h1>
        );
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />
            </form>
        );
    }
}

class MeteoriteLandingRow extends React.Component {
    render() {
        const meteoriteLanding = this.props.meteoriteLanding;

        return (
            <tr>
                <td>{meteoriteLanding.name}</td>
                <td>{meteoriteLanding.id}</td>
                <td>{meteoriteLanding.nametype}</td>
                <td>{meteoriteLanding.recclass}</td>
                <td>{meteoriteLanding.mass}</td>
                <td>{meteoriteLanding.fall}</td>
                <td>{String(new Date(meteoriteLanding.year).getFullYear())}</td>
                <td>{meteoriteLanding.reclat}</td>
                <td>{meteoriteLanding.reclong}</td>
            </tr>
        );
    }
}

class MeteoriteLandingTable extends React.Component {
    render() {
        const filterText = this.props.filterText;

        const rows = [];

        this.props.meteoriteLandings.forEach((meteoriteLanding) => {
            if (meteoriteLanding.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return;
            }
            rows.push(
                <MeteoriteLandingRow
                    meteoriteLanding={meteoriteLanding}
                    key={meteoriteLanding.name}
                />
            );
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Id</th>
                        <th>Name Type</th>
                        <th>Rec Class</th>
                        <th>Mass (g)</th>
                        <th>Fall</th>
                        <th>Year</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class FilterableMeteoriteLandingTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            meteoriteLandings: [],
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    componentDidMount() {
        fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
            .then(response => response.json())
            .then(data => this.setState({ meteoriteLandings: data }));
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    render() {

        return (
            <div className="container">
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                />
                <MeteoriteLandingTable
                    meteoriteLandings={this.state.meteoriteLandings}
                    filterText={this.state.filterText}
                />
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <FilterableMeteoriteLandingTable />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

