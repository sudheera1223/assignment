import React, { PureComponent } from "react";

class ProductCard extends PureComponent {
  render() {
    return (
      <div className="prod-card">
        <div className="prod-img">
          <img
            alt="product"
            src={`${this.props.eachListItem.images[0].base_url}${this.props.eachListItem.images[0].primary}`}
            className="thumbnail"
          />
        </div>
        <div className="prod-price-contn">
          <span className="prod-price">
            ${this.props.eachListItem.list_price.price}
          </span>
        </div>
        <div className="prod-name-contn">
          <span className="prod-name">{this.props.eachListItem.title}</span>
        </div>
        <div className="btn-contn">
          {this.renderCarActionButton()}
        </div>
      </div>
    );
  }

  renderCarActionButton = () => {
    let buttonAction = this.props.addToCart
    let buttonLabel = 'Add to cart'

    if(this.props.isAddedToCart){
        buttonAction = this.props.removeFromCart
        buttonLabel = 'Remove from cart'
    }

    return(
      <button className="btn" onClick={()=>buttonAction(this.props.eachListItem)}>
        {buttonLabel}
      </button>
    )
  }
}

export default ProductCard;