var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h1",
                { className: "header" },
                "Meteorite Explorer"
            );
        }
    }]);

    return Header;
}(React.Component);

var SearchBar = function (_React$Component2) {
    _inherits(SearchBar, _React$Component2);

    function SearchBar(props) {
        _classCallCheck(this, SearchBar);

        var _this2 = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

        _this2.handleFilterTextChange = _this2.handleFilterTextChange.bind(_this2);
        _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
        return _this2;
    }

    _createClass(SearchBar, [{
        key: "handleFilterTextChange",
        value: function handleFilterTextChange(e) {
            this.props.onFilterTextChange(e.target.value);
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            e.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { onSubmit: this.handleSubmit },
                React.createElement("input", {
                    type: "text",
                    placeholder: "Search...",
                    value: this.props.filterText,
                    onChange: this.handleFilterTextChange
                })
            );
        }
    }]);

    return SearchBar;
}(React.Component);

var MeteoriteLandingRow = function (_React$Component3) {
    _inherits(MeteoriteLandingRow, _React$Component3);

    function MeteoriteLandingRow() {
        _classCallCheck(this, MeteoriteLandingRow);

        return _possibleConstructorReturn(this, (MeteoriteLandingRow.__proto__ || Object.getPrototypeOf(MeteoriteLandingRow)).apply(this, arguments));
    }

    _createClass(MeteoriteLandingRow, [{
        key: "render",
        value: function render() {
            var meteoriteLanding = this.props.meteoriteLanding;

            return React.createElement(
                "tr",
                null,
                React.createElement(
                    "td",
                    null,
                    meteoriteLanding.name
                ),
                React.createElement(
                    "td",
                    null,
                    meteoriteLanding.id
                ),
                React.createElement(
                    "td",
                    null,
                    meteoriteLanding.nametype
                ),
                React.createElement(
                    "td",
                    null,
                    meteoriteLanding.recclass
                ),
                React.createElement(
                    "td",
                    null,
                    meteoriteLanding.mass
                ),
                React.createElement(
                    "td",
                    null,
                    meteoriteLanding.fall
                ),
                React.createElement(
                    "td",
                    null,
                    new Date(meteoriteLanding.year).getFullYear()
                ),
                React.createElement(
                    "td",
                    null,
                    meteoriteLanding.reclat
                ),
                React.createElement(
                    "td",
                    null,
                    meteoriteLanding.reclong
                )
            );
        }
    }]);

    return MeteoriteLandingRow;
}(React.Component);

var MeteoriteLandingTable = function (_React$Component4) {
    _inherits(MeteoriteLandingTable, _React$Component4);

    function MeteoriteLandingTable() {
        _classCallCheck(this, MeteoriteLandingTable);

        return _possibleConstructorReturn(this, (MeteoriteLandingTable.__proto__ || Object.getPrototypeOf(MeteoriteLandingTable)).apply(this, arguments));
    }

    _createClass(MeteoriteLandingTable, [{
        key: "render",
        value: function render() {
            var filterText = this.props.filterText;

            var rows = [];

            this.props.meteoriteLandings.forEach(function (meteoriteLanding) {
                if (meteoriteLanding.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                    return;
                }
                rows.push(React.createElement(MeteoriteLandingRow, {
                    meteoriteLanding: meteoriteLanding,
                    key: meteoriteLanding.name
                }));
            });

            return React.createElement(
                "table",
                null,
                React.createElement(
                    "thead",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "th",
                            null,
                            "Name"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Id"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Name Type"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Rec Class"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Mass (g)"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Fall"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Year"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Latitude"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Longitude"
                        )
                    )
                ),
                React.createElement(
                    "tbody",
                    null,
                    rows
                )
            );
        }
    }]);

    return MeteoriteLandingTable;
}(React.Component);

var FilterableMeteoriteLandingTable = function (_React$Component5) {
    _inherits(FilterableMeteoriteLandingTable, _React$Component5);

    function FilterableMeteoriteLandingTable(props) {
        _classCallCheck(this, FilterableMeteoriteLandingTable);

        var _this5 = _possibleConstructorReturn(this, (FilterableMeteoriteLandingTable.__proto__ || Object.getPrototypeOf(FilterableMeteoriteLandingTable)).call(this, props));

        _this5.state = {
            filterText: '',
            meteoriteLandings: []
        };

        _this5.handleFilterTextChange = _this5.handleFilterTextChange.bind(_this5);
        return _this5;
    }

    _createClass(FilterableMeteoriteLandingTable, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this6 = this;

            fetch('https://data.nasa.gov/resource/gh4g-9sfh.json').then(function (response) {
                return response.json();
            }).then(function (data) {
                return _this6.setState({ meteoriteLandings: data });
            });
        }
    }, {
        key: "handleFilterTextChange",
        value: function handleFilterTextChange(filterText) {
            this.setState({
                filterText: filterText
            });
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(SearchBar, {
                    filterText: this.state.filterText,
                    onFilterTextChange: this.handleFilterTextChange
                }),
                React.createElement(MeteoriteLandingTable, {
                    meteoriteLandings: this.state.meteoriteLandings,
                    filterText: this.state.filterText
                })
            );
        }
    }]);

    return FilterableMeteoriteLandingTable;
}(React.Component);

var App = function (_React$Component6) {
    _inherits(App, _React$Component6);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(FilterableMeteoriteLandingTable, null)
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));