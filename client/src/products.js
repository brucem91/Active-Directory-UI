import React, { Component } from "react";

class ProductRowCollection extends Component {
    render() {
        if ((this.props.products || []).length === 0) {
            return (
                <tr>
                    <td>No Product(s) Found</td>
                </tr>
            );
        }

        return this.props.products.map((product) => (<ProductRow key={product.Id} product={product} />));
    }
}

class ProductRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.product.ProductName}</td>
                <td>{this.props.product.ProductName}</td>
                <td>{this.props.product.ProductName}</td>
            </tr>
        );
    }
}

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerms: '',
            products: [{
                "Id": 1,
                "ProductName": "Apple Laptop Computer",
                "UnitPrice": 1499.99
            }, {
                "Id": 2,
                "ProductName": "Dell XPS 13 Developer Edition",
                "UnitPrice": 1299.99
            }]
        };
    }

    handleKeywordChange = (event) => {
        this.setState({ searchTerms: event.target.value });
    }

    filteredProducts = () => {
        return this.state.products.filter((product) => {
            var terms = (this.state.searchTerms || '').split(' ').filter((val) => {
                return (val.length > 0);
            });

            if (terms.length === 0) {
                return true;
            }

            for (var term of terms) {
                if ((product.ProductName || '').toLowerCase().indexOf(term.toLowerCase()) > -1) {
                    return true;
                }
            }

            return false;
        });
    };

    render() {
        return (
            <div>
                <input type="text" value={this.state.searchTerms} onChange={this.handleKeywordChange} />
                <table className="table table-responsive table-striped table-bordered table-condensed">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Product</th>
                            <th>Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ProductRowCollection products={this.filteredProducts()} />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Products;