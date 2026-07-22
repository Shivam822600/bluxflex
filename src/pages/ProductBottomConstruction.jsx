import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_a4da6e12_8b22_4896_929b_815191c46974_1024x1024_png_1 from '../assets/images/a4da6e12-8b22-4896-929b-815191c46974-1024x1024.png?url';
import asset_a4da6e12_8b22_4896_929b_815191c46974_300x300_png_2 from '../assets/images/a4da6e12-8b22-4896-929b-815191c46974-300x300.png?url';
import asset_a4da6e12_8b22_4896_929b_815191c46974_150x150_png_3 from '../assets/images/a4da6e12-8b22-4896-929b-815191c46974.png?url';

export default function ProductBottomConstruction() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-2292 product type-product status-publish has-post-thumbnail hentry product_category-pp-woven-sacks">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="800" src="${asset_a4da6e12_8b22_4896_929b_815191c46974_1024x1024_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_a4da6e12_8b22_4896_929b_815191c46974_1024x1024_png_1} 1024w, ${asset_a4da6e12_8b22_4896_929b_815191c46974_300x300_png_2} 300w, ${asset_a4da6e12_8b22_4896_929b_815191c46974_150x150_png_3} 150w, ${asset_a4da6e12_8b22_4896_929b_815191c46974_150x150_png_3} 768w, ${asset_a4da6e12_8b22_4896_929b_815191c46974_150x150_png_3} 1254w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Bottom Construction</h1>                </div>
    	                <div class="page-content">
        <p>The bottom seam is the most load-stressed point in a woven PP bag. It carries the full weight of the product during lifting and the full impact force when a filled bag lands on a conveyor, pallet, or warehouse floor. A bottom seam specified below the requirement for the product weight and handling environment will fail and a seam failure mid-supply chain means product loss, contamination, and a claim.</p>
<p>➤&nbsp;<strong>Bottom Single Fold Single Stitch</strong></p>
<p>The base is folded once and sewn with one line of stitching. The entry-level bottom construction lowest cost, adequate for lightweight products in gentle handling environments and short supply chains.</p>
<p><strong>Construction:</strong> One fold, one stitch line <strong>Strength:</strong> Entry level — suitable for low-density, low-weight products <strong>Best For:</strong> Light retail packs, 5–15 kg bags, short supply chains, covered storage distribution</p>
<p>➤&nbsp;<strong>Bottom Single Fold Double Stitch</strong></p>
<p>The base is folded once and sewn with two parallel lines of stitching. The second stitch line significantly increases seam strength and resistance to seam opening under impact loading when filled bags are dropped from conveyors, stacked at height, or handled repeatedly through a long supply chain.</p>
<p>Single fold double stitch is the standard bottom construction for the majority of commercial woven PP bags globally. It is the correct specification for rice, flour, sugar, animal feed, fertiliser, and standard industrial sacks — the point at which seam strength, production cost, and commercial requirement are properly balanced.</p>
<p><strong>Construction:</strong> One fold, two parallel stitch lines <strong>Strength:</strong> Commercial standard suitable for most food, feed, agricultural, and industrial applications <strong>Best For:</strong> Rice, flour, sugar, animal feed, fertiliser, minerals — the default specification for 25 kg and 50 kg commercial sacks</p>
<p><strong>➤&nbsp;Bottom Double Fold Single Stitch</strong></p>
<p>The base is folded twice — creating a double-thickness fold — then sewn with one stitch line through all layers. The double fold creates more structural density at the seam base, distributing the stitch load across more fabric layers than a single fold.</p>
<p><strong>Construction:</strong> Two folds, one stitch line <strong>Strength:</strong> Increased seam density — good resistance to seam separation <strong>Best For:</strong> Medium to high density products, bags requiring a clean-folded base appearance with reinforced seam thickness</p>
<p><strong>➤&nbsp;Bottom Double Fold Double Stitch</strong></p>
<p>The base is folded twice and sewn with two parallel stitch lines through all layers. The strongest standard bottom construction for woven PP bags. Double-thickness fold combined with double stitching provides maximum resistance to seam opening under sustained load, impact loading, and repeated handling cycles throughout a long, multi-stage supply chain.</p>
<p>If your bag is carrying 50 kg of dense product, being dropped from a conveyor belt onto a concrete floor, palletised six layers high, containerised, ocean-freighted, deconsolidated, and warehoused before final delivery — this is the bottom specification.</p>
<p><strong>Construction:</strong> Two folds, two parallel stitch lines <strong>Strength:</strong> Maximum highest resistance to seam opening under impact and sustained load&nbsp; <strong>Best For:</strong> Cement, heavy minerals, dense chemicals, sandbags, 50 kg industrial sacks, long multi-handling supply chains</p>
<p><strong>➤&nbsp;Block Bottom (AD Star Style)</strong></p>
<p>The base is folded and tucked into a flat, squared geometry without conventional stitching producing a self-standing, brick-shaped bag with a uniform flat base for valve-filling lines and stable palletisation. Standard for AD Star bags and valve-fill construction products.</p>
<p><strong>Construction:</strong> Folded and tucked — flat self-standing geometry&nbsp; <strong>Best For:</strong> AD Star valve bags, cement, dry mortar, construction chemicals on automated filling lines</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}