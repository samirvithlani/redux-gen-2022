import { HomeComponent } from "../components/HomeComponent";
import { addToCart } from "../services/Actions/Action";
import { connect } from "react-redux";
//2 function built in function action 

const mapStateToProps = state => ({

    cartData:state
})

const mapDispatchToProps = dispatch => ({

    
    addToCartHandler:product=>dispatch(addToCart(product))

})

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);