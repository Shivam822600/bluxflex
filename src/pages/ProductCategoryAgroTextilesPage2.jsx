import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_crop_covers_jpg_1 from '../assets/images/crop_covers.jpg?url';
import asset_wind_shield_nets_jpg_2 from '../assets/images/wind_shield_nets.jpg?url';
import asset_plant_nets_jpg_3 from '../assets/images/plant_nets.jpg?url';

export default function ProductCategoryAgroTextilesPage2() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main">
	<div class="productListWrapper">
	

	<div class="page-content">
		<div class="productContent">	
			
			 				<div class="page-header">
					<h1 class="entry-title">Product Category: <span>Agro Textiles</span></h1><p class="archive-description"></p><p>Agriculture, construction, and horticulture share a common challenge — the environment does not cooperate on schedule. Weeds compete for every nutrient in the ground. Solar radiation scalds crops that cannot tolerate peak summer heat. Hail arrives without warning and leaves a commercial harvest unmarketable in minutes. Wind-driven rain penetrates building envelopes and degrades structures from the inside out over years.</p>
<p>Agro textiles are engineered woven fabrics that stand between the crop, the structure, and the environment — managing the specific threat each application presents at a fraction of the cost of the damage they prevent.</p>
<p>Every product on this page is woven polypropylene or polyethylene — UV-stabilised, specification-confirmed, and available in custom sizes. Retail-ready packaged formats are available on ground covers. Full bulk supply on all products.</p>
<p></p>				</div>
						
			<div class="productTypes">
				<ul>
					<li><a href="/fibc/types">Types</a></li>
					<li><a href="/fibc/discharge">Discharge</a></li>
					<li><a href="/fibc/filling">Filling</a></li>
					<li><a href="/fibc/lift-loops">Lift Loops</a></li>
					<li><a href="/fibc/liners">Liners</a></li>
					<li><a href="/fibc/stitch-types">Stitch Types</a></li>
				</ul>
			</div>
			<div class="productCategories">
				
							</div>
			

		
		
        <div class="productListing">
           
    
            <div class="productList">
            			<article class="post">
				<div class="entry-thumbnail"><a href="/product/crop-covers"><img fetchpriority="high" width="800" height="808" src="${asset_crop_covers_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_crop_covers_jpg_1} 945w, ${asset_crop_covers_jpg_1} 297w, ${asset_crop_covers_jpg_1} 768w" sizes="(max-width: 800px) 100vw, 800px"></a></div>
				<div class="entry-content-wrapper">
					<h2 class="entry-title"><a href="/product/crop-covers">Crop Covers</a></h2><p>Season Extension Without a Structure A crop cover — also called a row cover or floating row cover — is a lightweight woven or spunbond fabric laid directly over crops or supported on low hoops above them. It creates a protected microclimate around the crop without requiring a permanent greenhouse structure — raising temperature, excluding… <a class="read-more-inline" href="/product/crop-covers">Read More</a></p>
					
				</div>

			</article>

					<article class="post">
				<div class="entry-thumbnail"><a href="/product/windshield-nets"><img width="800" height="808" src="${asset_wind_shield_nets_jpg_2}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_wind_shield_nets_jpg_2} 945w, ${asset_wind_shield_nets_jpg_2} 297w, ${asset_wind_shield_nets_jpg_2} 768w" sizes="(max-width: 800px) 100vw, 800px"></a></div>
				<div class="entry-content-wrapper">
					<h2 class="entry-title"><a href="/product/windshield-nets">Windshield Nets</a></h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many… <a class="read-more-inline" href="/product/windshield-nets">Read More</a></p>
					
				</div>

			</article>

					<article class="post">
				<div class="entry-thumbnail"><a href="/product/plant-nets"><img width="800" height="808" src="${asset_plant_nets_jpg_3}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_plant_nets_jpg_3} 945w, ${asset_plant_nets_jpg_3} 297w, ${asset_plant_nets_jpg_3} 768w" sizes="(max-width: 800px) 100vw, 800px"></a></div>
				<div class="entry-content-wrapper">
					<h2 class="entry-title"><a href="/product/plant-nets">Plant Nets</a></h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many… <a class="read-more-inline" href="/product/plant-nets">Read More</a></p>
					
				</div>

			</article>

		        </div>
        </div>
        </div>
	</div>

			<nav class="pagination">
			<div class="nav-previous"><a href="/.."><span class="meta-nav">←</span> Previous</a></div>
			<div class="nav-next"></div>
		</nav>
		</div>
</main>` }} />
        </Layout>
    );
}