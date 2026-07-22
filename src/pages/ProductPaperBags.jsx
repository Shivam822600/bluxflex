import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_paper_bags_png_1 from '../assets/images/paper_bags.png?url';

export default function ProductPaperBags() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-2213 product type-product status-publish has-post-thumbnail hentry product_category-retail-shoping-bags">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="800" src="${asset_paper_bags_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_paper_bags_png_1} 1024w, ${asset_paper_bags_png_1} 300w, ${asset_paper_bags_png_1} 150w, ${asset_paper_bags_png_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Paper Bags</h1>                </div>
    	                <div class="page-content">
        <p>Paper is the most universally accepted sustainable retail packaging material. No consumer explanation required. No regulatory risk in markets where single-use plastic is levied or banned. And no other material delivers the same combination of premium brand presentation and environmental credibility at the price point paper achieves.</p>
<p>We supply paper bags in two base constructions — handle bags for boutique and retail carry, and self-opening bags for food service and grocery — across kraft and bleached paper in every size and print specification.</p>
<p><strong>➤ Paper Handle Bags&nbsp;</strong></p>
<p>Paper handle bags are produced in kraft (natural brown) or bleached (white) paper and supplied with either a twisted handle or a flat handle — the two construction choices that determine how the bag looks, how it carries, and what it communicates about the brand behind it.</p>
<p><strong>Kraft paper</strong> communicates craft, provenance, and sustainability — the natural brown tone is the visual language of artisan food, specialty retail, and considered brand positioning.</p>
<p><strong>Bleached white paper</strong> is the premium retail canvas — colours reproduce more accurately, photography lands more cleanly, and white communicates the precision and restraint that luxury and fashion brands require.</p>
<p><strong>Handle Options: Twisted handle</strong> — twisted paper cord through a reinforced punched hole. The standard retail bag handle globally. Fast, clean, and familiar to consumers in every market. <strong>Flat handle</strong> — paper ribbon, cotton tape, satin ribbon, or PP rope. Wider contact area for heavier loads, cleaner profile on display, and a more premium finish for boutique and gifting applications. Handle material, width, and colour are customisable.</p>
<p><strong>Print:</strong> 25% spot coverage to 100% full bleed · Up to 6 colours · 1, 2, or 4 sides Finish Options: Unlaminated · Matte laminate · Gloss laminate · Soft-touch laminate · Foil stamp · Emboss Paper: Virgin or recycled content kraft · Virgin or recycled bleached white Sizes: Custom — from small gift formats to large grocery carry Colour Options: Natural kraft, bleached white, and dyed colour options available Best For: Boutiques, fashion, specialty food, bakeries, cosmetics, gifting, premium FMCG, any retailer where the bag communicates as much as the product inside it</p>
<p><strong>➤ Pinch Bottom Paper Bag</strong></p>
<p>The pinch bottom bag — also called a pinch bottom gusset bag — has a flat, sealed base formed by pinching and folding the bottom of the bag during manufacturing, creating a self standing flat-bottomed bag without a separate base insert. When filled, it stands upright on its own. It presents cleanly on shelf, on counter, and in display — and it opens wide at the top for fast filling at the packing or checkout station.</p>
<p>Available in kraft and bleached white, with print in up to four colours. The pinch bottom construction is the standard for specialty food retail, bakery, confectionery, and premium grocery applications where the bag needs to stand and present without support.</p>
<p><strong>Construction:</strong> Pinch-sealed flat base — self-standing Paper: Kraft · Bleached white&nbsp; <strong>Print:</strong> Up to 4 colours · 1 or 2 sides Finish: Unlaminated · Windowed (glassine or PET window available) <strong>Sizes:</strong> Custom&nbsp; <strong>Best For:</strong> Bakeries, confectionery, specialty food, coffee retail, delis, any application where a flat-based self-standing paper bag is required</p>
<p><strong>➤ SOS Paper Bag (Self-Opening Satchel)</strong></p>
<p>The SOS bag is the original flat-bottom grocery and carry bag — the format with the wide, stable base, gusseted sides, and open top that has been the standard for food service, grocery, and retail carry across North America, Europe, and Asia for decades. It opens wide, stands flat, fills fast, and carries reliably. It is the most practical and most widely produced paper carry bag format in the world.</p>
<p>Available in natural kraft and bleached white in a full range of sizes from small counter bags to large grocery carry. Print in up to four colours. Widely specified in food service, grocery retail, bakery, and any high-throughput checkout or counter environment where bag opening speed and fill efficiency matter.</p>
<p><strong>Construction:</strong> Flat base, gusseted sides, open top — self-standing&nbsp; <strong>Paper:</strong> Kraft · Bleached white&nbsp; <strong>Print:</strong> Up to 4 colours · 1 or 2 sides&nbsp; <strong>Sizes:</strong> Custom — from small counter formats to large grocery carry&nbsp; <strong>Best For:</strong> Grocery retail, food service, bakeries, delis, high-throughput checkout and counter environments</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}