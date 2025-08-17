import userModel from "../models/UserModel.js"

//add items to user cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Ensure cartData exists
    let cartData = userData.cartData || {};

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "added to cart" });
  } catch (error) {
    console.error("AddToCart error:", error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

//remove items from user cart
const removeFromCart=async(req,res)=>{

  try {
    let userData=await userModel.findById(req.body.userId)
    let cartData=await userData.cartData;
    if (cartData[req.body.itemId]>0) {
      cartData[req.body.itemId]-=1;
      
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData});
    res.json({success:true,message:"Removed from cart"})
  } catch (error) {
    console.log("Error");
    res.json({success:false,message:"Error"})
    
  }
}

//fetch user cart data
const getCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // if cartData is not set, return an empty object
    const cartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.error("GetCart Error:", error);
    res.status(500).json({ success: false, message: "Error fetching cart" });
  }
};


export {addToCart,removeFromCart,getCart}
