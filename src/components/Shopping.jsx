import { useReducer, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function Shopping() {
    const [cart, set_cart] = useState("No");
    const [border, set_border] = useState('0px');
    const reducerfunc = (cart_list, action) => {
        let newlist = cart_list;
        if (action.type == "ADD") {
            newlist = [...cart_list, { img: action.payload.img, title: action.payload.title, mrp: action.payload.mrp, rating: action.payload.rating }];
        }
        else if (action.type == "DELETE") {
            newlist = cart_list.filter((item) => item.img != action.payload.img);
        }
        return newlist;

    }
    const [cart_list, dispatch_cart_list] = useReducer(reducerfunc, []);

    const add_to_cart = (obj) => {
        console.log(obj);
        const addnew = {
            type: "ADD",
            payload: {
                img: obj.img,
                title: obj.title,
                mrp: obj.mrp,
                rating: obj.rating
            }
        }
        dispatch_cart_list(addnew);
    }
    const delete_from_cart = (obj) => {
        const deletecart = {
            type: "DELETE",
            payload: {
                img: obj.img
            }
        }
        dispatch_cart_list(deletecart);
    }
    const shopping_items = [
        {
            img: "https://onemg.gumlet.io/images/h_150,f_auto,w_150,c_fit,q_auto/e204459e70cf46efb97971596a2be1d3/zingavita-multivitamin-for-men-with-omega-3-for-immunity-stamina-muscle-support-tablet.jpg",
            title: "Zingavita Multivitamin for men with omega 3..",
            mrp: 361,
            rating: 4.6,

        },
        {
            img: "https://onemg.gumlet.io/images/h_150,f_auto,w_150,c_fit,q_auto/bf72eb8d9ca34388b2b88749e1cdb12f/groviva-child-nutrition-for-physical-growth-brain-development-immunity-flavour-chocolate-powder.jpg",
            title: "Groviva Child Nutrition for Physical growth,Brain..",
            mrp: 300,
            rating: 4.8,

        },
        {
            img: "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/a8a3d3fd1acb47909963bd88ad79c2b3.jpg",
            title: "Centrum Omega 3 Fish Oil Capsule For Heart,Skin,Eye..",
            mrp: 400,
            rating: 4.0,

        },
        {
            img: "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/2f386cc9d24f45ddb0c8460b9670547a.jpg",
            title: "Shelcal 500 calcium+Vitamin D3 Tablet",
            mrp: 450,
            rating: 3.5,

        },
        {
            img: "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/cropped/lb85s3vmdwv1vdqvurkj.jpg",
            title: "Swisse Ultiboost Magnesium Tablet for Healthy Muscles &...",
            mrp: 400,
            rating: 3.9,

        },
        {
            img: "https://onemg.gumlet.io/images/w_150,q_auto,h_150,f_auto,c_fit/d01ab627ad3f4241832829e6ac0fa25d/tata-1mg-fish-oil-capsules-for-heart-and-bone-health.jpg",
            title: "Tata Fish Oil Capsules For Heart and Bone Health",
            mrp: 315,
            rating: 3.2,

        },
        {
            img: "https://onemg.gumlet.io/images/w_150,q_auto,h_150,f_auto,c_fit/e7f98648826e4c54a084eb2df8f5d896/centrum-women-vegetarian-tablets-for-muscles-heart-immunity-world-s-no.1-multivitamin.jpg",
            title: "Centrum Women | Vegetarian Tablets for Muscles,Heart,&..",
            mrp: 700,
            rating: 4.2,

        },
        {
            img: "https://onemg.gumlet.io/images/w_150,q_auto,h_150,f_auto,c_fit/85a203f80cc149e4a53c275422ce1ca7/revital-h-men-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy.jpg",
            title: "Revital H Men Multivitamin with Calcium,Zinc & Ginseng",
            mrp: 399,
            rating: 4.9,

        },
        {
            img: "https://onemg.gumlet.io/images/w_150,q_auto,h_150,f_auto,c_fit/1888d781860f42d6bdd108270b0db958/dr.-morepen-triple-strength-omega-3-fish-oil-1250mg-softgel-for-heart-brain-joints.jpg",
            title: "Dr. Morepen Triple Strength Omega 3 Fish Oil",
            mrp: 599,
            rating: 3.0
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,q_auto,h_150,f_auto,c_fit/1888d781860f42d6bdd108270b0db958/dr.-morepen-triple-strength-omega-3-fish-oil-1250mg-softgel-for-heart-brain-joints.jpg",
            title: "Revital H fro Woman Tablet with mulitivitamin,calcium",
            mrp: 400,
            rating: 4.5
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,q_auto,h_150,f_auto,c_fit/5a34b45b7f284dd5ae17710100f5b0fa/power-gummies-hair-nail-vitamin-with-biotin-gelatin-gluten-free.jpg",
            title: "Power Gummies- Hair and nail witamin",
            mrp: 299,
            rating: 4.0
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,q_auto,h_150,f_auto,c_fit/601fd23d-cc5f-48aa-a9d8-617e673c1e92/tata-1mg-fish-oil-capsules-for-heart-and-bone-health.jpeg",
            title: "Tata 1mg Fsih oil capsules Heart and Bone Health",
            mrp: 200,
            rating: 3.8
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,q_auto,h_150,f_auto,c_fit/917a64421215472ab13ad4dd73d09cc4/nutrone-100-whey-protein-powder-choffee-with-shaker-free.jpg",
            title: "Nutrone 100% Whey Protein Powder",
            mrp: 799,
            rating: 4.7
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,q_auto,h_150,f_auto,c_fit/874c73ab2b3747f68d49263ab2c475ca/zincovit-tablet.jpg",
            title: "Zincovit Tablet",
            mrp: 400,
            rating: 3.7
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,q_auto,h_150,f_auto,c_fit/2b40245a11bc4c41b773f3f95ef7593e/wellwoman-50-health-supplement-for-women-reduces-tiredness-fatigue-gluten-free-tablet.jpg",
            title: "WellWoman 50+ Health supplement",
            mrp: 399,
            rating: 470
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,q_auto,h_150,f_auto,c_fit/c9d197304dab421d85f5c59dd20a8916/groviva-child-nutrition-for-physical-growth-brain-development-immunity-flavour-chocolate-powder.jpg",
            title: "Groviva Child Nutrition for physical growth",
            mrp: 621,
            rating: 4.9
        },






        {
            img: "https://onemg.gumlet.io/images/w_150,f_auto,q_auto,h_150,c_fit/bac8a5daa98047deb893fe540f0d10fa/protinex-high-quality-protein-nutritional-drink-for-immunity-strength-zero-added-sugar-flavour-rich-chocolate-powder.jpg",
            title: "Proteinex high quality protein",
            mrp: 621,
            rating: 4.5
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,f_auto,q_auto,h_150,c_fit/ff1onpwycfem2uf0m2fy/sugar-free-green-stevia-for-calorie-conscious-pellets.jpg",
            title: "Sugar free green stevia",
            mrp: 253,
            rating: 4.3
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,f_auto,q_auto,h_150,c_fit/cropped/gzxdhmop9fozda9wvx3r/threptin-high-calorie-protein-supplement-with-b-vitamins-for-hunger-pangs-flavour-vanilla-diskette.jpg",
            title: "Threptin High calorie protein",
            mrp: 1549,
            rating: 4.5
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,f_auto,q_auto,h_150,c_fit/b197744971dd4c6ab3e148a469270c89/heka-bites-healthy-delicious-all-day-fruit-nut-mix-protein-rich-gluten-free.jpg",
            title: "Heka bites healthy dry fruits",
            mrp: 239,
            rating: 3.7
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,f_auto,q_auto,h_150,c_fit/1d3a5b6cecef4695ba5200ff7898223b/zandu-pure-honey-for-energy-weight-management-no-sugar-adulteration.jpg",
            title: "Zandu pure Honey for energy and weight",
            mrp: 192,
            rating: 4.4
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,f_auto,q_auto,h_150,c_fit/ea74f36cf7f648eb859c66365e1164f1/celevida-kesar-elaichi-nutrition-health-drink.jpg",
            title: "Nutrition Health drink",
            mrp: 648,
            rating: 4.4
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,f_auto,q_auto,h_150,c_fit/cropped/wf4epamdbrwhyus9oz6f/saffola-masala-oats-with-high-fibre-protein-flavour-classic-masala.jpg",
            title: "Saffola Masala Oats",
            mrp: 248,
            rating: 3.9
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,f_auto,q_auto,h_150,c_fit/c9dfe461a1794be885451f72824f8530/my-fitness-peanut-butter-chocolate-crunchy.jpg",
            title: "My fitness Peanut Butter ",
            mrp: 437,
            rating: 4.2
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,f_auto,q_auto,h_150,c_fit/56f3b2805d1d4cd69ac8f1a328f415df/tata-1mg-apple-cider-vinegar-acv-probiotic-plus-raw-unfiltered-unpasteurized-with-the-mother.jpg",
            title: "Apple cider vinegar",
            mrp: 196,
            rating: 4.4
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,f_auto,q_auto,h_150,c_fit/cropped/zpic0mclpn3m1qenj0wv/grd-lite-protein-for-growth-development-no-added-sugar-flavour-cardamom-diskette.png",
            title: "GRD lite protein for growth",
            mrp: 437,
            rating: 3.6
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,f_auto,q_auto,h_150,c_fit/ece01aecd87d49b18f2f59d18ccf85e9/ensure-powder-health-drink-vanilla-refill.jpg",
            title: "Ensure Powder health Drink",
            mrp: 1601,
            rating: 4.5
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,f_auto,q_auto,h_150,c_fit/61aca5020ced4c1aa65683d854bae819/nepro-hp-high-protein-health-drink-powder-vanilla-toffee.jpg",
            title: "Nepro highr protein powder",
            mrp: 1154,
            rating: 4.4
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,f_auto,q_auto,h_150,c_fit/34aced9d2ce043858d8d613f562454ec/delight-nuts-natural-whole-cashew.jpg",
            title: "Natural whole cashew",
            mrp: 351,
            rating: 4.3
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,f_auto,q_auto,h_150,c_fit/ff1onpwycfem2uf0m2fy/sugar-free-green-stevia-for-calorie-conscious-pellets.jpg",
            title: "Sugar free green stevia",
            mrp: 253,
            rating: 4.3
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,f_auto,q_auto,h_150,c_fit/79b0118fd2fe4529a9f4a407a1ae92bf/tata-1mg-organic-apple-cider-vinegar-with-the-mother-of-vinegar-for-healthy-weight-management-overall-wellbeing.jpg",
            title: "Organic apple cider vinegar",
            mrp: 192,
            rating: 4.4
        },
        {
            img: "https://onemg.gumlet.io/images/w_150,f_auto,q_auto,h_150,c_fit/b1a869071f9f4d399d36d0d7594e75ed/organic-india-tulsi-green-tea.jpg",
            title: "Organic Indian Tulsi Tea",
            mrp: 241,
            rating: 3.9
        },

    ]
    return <>
        <div className="container-fluid">
            <div className="row">
                <h1 style={{ 'textAlign': 'center' }}><pre>MEDICURE {cart == "No" && <button className="btn" style={{ 'backgroundColor': 'yellow', 'textAlign': 'center' }} onClick={() => {
                    set_cart("Yes");
                }}> See Cart <FaCartArrowDown /></button>}</pre></h1>
            </div>
            {cart == "No" && <div className="row" style={{ 'backgroundImage': "url('https://onemg.gumlet.io/f_auto,h_120,a_ignore,w_1027,q_auto/5973a51e-904f-4332-bb93-4b6a9405fb1b.jpg')", 'backgroundRepeat': 'no-repeat', 'height': '200px', 'width': '100%', 'backgroundSize': '100%' }}></div>}

        </div>
        {cart === "No" &&
            <div className="container" style={{ 'paddingLeft': '80px' }}>
                <div className="row">
                    {shopping_items.map((item) => (
                        <>
                            <button className="btn col-md-2" style={{ 'textAlign': 'center', 'boxShadow': '0px 0px 10px 0px', 'marginTop': '50px' ,'backgroundColor':'white'}}>
                                <div className="row">
                                    {/* <div className="col-1"></div> */}
                                    <div className="col-7" style={{ 'height': '100px' }}>
                                        <img src={item.img} style={{ 'border': `${border} solid black`, 'width': '100%', 'height': '100%' }} />
                                    </div>
                                    <div className="col-5">
                                        <button className="btn btn-warning" style={{ 'width': '100%', }} onClick={() => {
                                            add_to_cart({
                                                img: item.img,
                                                title: item.title,
                                                mrp: item.mrp,
                                                rating: item.rating
                                            });
                                            alert("Added to cart successfullly \n You can see the cart");
                                            
                                        }}>ADD<FaCartArrowDown /></button>
                                    </div>
                                </div>
                                <h6>{item.title}</h6>
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <span><h4 style={{ 'backgroundColor': 'green', 'borderRadius': '5px', 'color': 'white' }}>₹ {item.mrp}</h4></span>
                                    </div>
                                    <div className="col">
                                        <span style={{ 'backgroundColor': 'white' }}>{item.rating}<CiStar /></span>
                                    </div>
                                </div>
                            </button>
                            <div className="col-1" style={{ 'marginTop': '50px' }}></div>
                            <br />
                        </>

                    ))}
                </div>
            </div>
        }




        {/* cart */}


        {cart == "Yes" &&
            <div className="container">
                <div className="row" style={{ 'textAlign': 'center' }}>
                    <button className="btn btn-warning" onClick={() => {
                        set_cart("No");
                    }}>See More Shopping items</button>


                    {cart == "Yes" && cart_list.length == 0 &&
                        <div className="container">
                            <div className="row">
                                <h1>No Items are added</h1>
                            </div>
                        </div>
                    }
                </div>
                <div className="row">
                    {cart_list.map((item) => (
                        <>
                            <button className="btn col-md-2" style={{ 'textAlign': 'center', 'boxShadow': '0px 0px 10px 0px', 'marginTop': '50px','backgroundColor':'white' }}>
                                <div className="row">
                                    {/* <div className="col-1"></div> */}
                                    <div className="col-7" style={{ 'height': '100px' }}>
                                        <img src={item.img} style={{ 'border': `${border} solid black`, 'width': '100%', 'height': '100%' }} />
                                    </div>
                                    <div className="col-5">
                                        <button className="btn btn-danger" style={{ 'width': '100%' }}
                                            onClick={() => {
                                                delete_from_cart({ img: item.img });
                                                alert("Delete from cart");
                                            }}>
                                            <MdDelete />
                                        </button>
                                    </div>
                                </div>
                                <h6>{item.title}</h6>
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <span><h4 style={{ 'backgroundColor': 'green', 'borderRadius': '5px', 'color': 'white' }}>₹ {item.mrp}</h4></span>
                                    </div>
                                    <div className="col">
                                        <span style={{ 'backgroundColor': 'white' }}>{item.rating}<CiStar /></span>
                                    </div>
                                </div>
                            </button>
                            <div className="col-1" style={{ 'marginTop': '50px' }}></div>
                            <br />
                        </>

                    ))}
                </div>
            </div>
        }
    </>
}
export default Shopping;