"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arry = [{
  name: "Cigagrete",
  basePrice: 14,
  quantity: 0,
  price: 0
}, {
  name: "Tea",
  basePrice: 7,
  quantity: 0,
  price: 0
}, {
  name: "Passpass",
  basePrice: 1,
  quantity: 0,
  price: 0
}, {
  name: "Nuts",
  basePrice: 10,
  quantity: 0,
  price: 0
}, {
  name: "Chocolate",
  basePrice: 1,
  quantity: 0,
  price: 0
}];
//class way

var HelloWorld = function (_React$Component) {
  _inherits(HelloWorld, _React$Component);

  function HelloWorld(props) {
    _classCallCheck(this, HelloWorld);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      color: "hotpink",
      quantity: 0,
      price: 0,
      basePrice: 7,
      index: 0,
      totalprice: 0
    };
    return _this;
  }

  HelloWorld.prototype.toggleColor = function toggleColor() {
    if (this.state.color === 'hotpink') {
      this.setState({
        color: "yellow"
      });
    } else {
      this.setState({
        color: "hotpink"
      });
    }
  };

  HelloWorld.prototype.quantityPlus = function quantityPlus(id) {

    // console.log(arry[id]);
    arry[id].quantity = arry[id].quantity + 1;
    var pricess = arry[id].basePrice;

    arry[id].price = arry[id].basePrice + arry[id].price;
    this.setState({
      quantity: this.state.quantity + 1,
      price: this.state.basePrice + this.state.price,
      totalprice: this.state.totalprice + pricess
    });
  };

  HelloWorld.prototype.quantityMinus = function quantityMinus(id) {

    if (arry[id].quantity >= 1) {
      arry[id].quantity = arry[id].quantity - 1;
      var pricess = arry[id].basePrice;
      arry[id].price = arry[id].price - arry[id].basePrice;
      this.setState({
        quantity: this.state.quantity - 1,
        price: this.state.price - this.state.basePrice,
        totalprice: this.state.totalprice - pricess
      });
    }
  };

  HelloWorld.prototype.changeColor = function changeColor(event) {
    this.setState({
      color: event.target.value
    });
  };

  HelloWorld.prototype.render = function render() {
    var _this2 = this;

    var styleObj = { backgroundColor: this.state.color,
      fontSize: this.props.name / 9
    };

    var rows = arry.map(function (user, pluss) {
      return React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          user.name
        ),
        React.createElement(
          "td",
          null,
          user.basePrice
        ),
        React.createElement(
          "td",
          null,
          user.quantity
        ),
        React.createElement(
          "td",
          null,
          user.price
        )
      )

      //       return (
      //         <section>
      //              <div className="card cards">
      //           <span className="align">{user.name} --{user.basePrice}</span>
      //           <br/>

      //             <div className="cssCircle plusSign" onClick={this.quantityPlus.bind(this)}>
      //               &#43;
      //             </div>
      //              Quantity : {user.quantity}
      //             <div className="cssCircle minusSign" onClick={this.quantityMinus.bind(this)}>
      //              &#8211;
      //             </div>
      //             Price : {user.price}

      //         </div>
      //          </section> 

      ;
    });

    return React.createElement(
      "div",
      null,
      arry.map(function (user, index) {
        return React.createElement(
          "section",
          null,
          React.createElement(
            "div",
            { className: "card cards" },
            React.createElement(
              "span",
              { className: "align" },
              user.name,
              " --",
              user.basePrice
            ),
            React.createElement("br", null),
            React.createElement(
              "div",
              { className: "cssCircle plusSign", onClick: _this2.quantityPlus.bind(_this2, index) },
              "+"
            ),
            "Quantity : ",
            user.quantity,
            React.createElement(
              "div",
              { className: "cssCircle minusSign", onClick: _this2.quantityMinus.bind(_this2, index) },
              "–"
            ),
            "Price : ",
            user.price
          )
        );
      }),
      React.createElement(
        "div",
        { className: "card cards" },
        React.createElement(
          "h2",
          null,
          " Total Price: ",
          this.state.totalprice
        )
      )
    );
    return React.createElement(
      "div",
      null,
      rows
    );
    return(
      // <section style={styleObj} id="hello-world">
      React.createElement(
        "section",
        { id: "hello-world" },
        React.createElement(
          "div",
          { className: "card cards" },
          React.createElement(
            "span",
            { className: "align" },
            "Tea --7"
          ),
          React.createElement("br", null),
          React.createElement(
            "div",
            { className: "cssCircle plusSign", onClick: this.quantityPlus.bind(this) },
            "+"
          ),
          "Quantity : ",
          this.state.quantity,
          React.createElement(
            "div",
            { className: "cssCircle minusSign", onClick: this.quantityMinus.bind(this) },
            "–"
          ),
          "Price : ",
          this.state.price
        )
      )
    );
  };

  return HelloWorld;
}(React.Component);
// <h2 onClick={this.toggleColor.bind(this)}>{this.state.color}</h2>
//         <input value={this.state.color} onChange={this.changeColor.bind(this)}/>
//functional way

var HelloWorld2 = React.createClass({
  displayName: "HelloWorld2",

  render: function render() {
    return React.createElement(
      "h2",
      null,
      this.props.name
    );
  }
});

ReactDOM.render(React.createElement(HelloWorld, { name: "67" }), document.getElementById("app"));