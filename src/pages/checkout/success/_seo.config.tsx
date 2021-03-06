import React from 'react';
import {NextSeo} from 'next-seo';

export const CheckoutSuccessSeo = () => {
	return (
		<NextSeo
			title="Checkout Success | BrandAlley"
			description="This example uses more of the available config options."
			openGraph={{
				url: 'https://www.url.ie/a',
				title: 'Open Graph Title',
				description: 'Open Graph Description',
				images: [
					{
						url: 'https://www.example.ie/og-image-01.jpg',
						width: 800,
						height: 600,
						alt: 'Og Image Alt',
						type: 'image/jpeg',
					},
					{
						url: 'https://www.example.ie/og-image-02.jpg',
						width: 900,
						height: 800,
						alt: 'Og Image Alt Second',
						type: 'image/jpeg',
					},
					{url: 'https://www.example.ie/og-image-03.jpg'},
					{url: 'https://www.example.ie/og-image-04.jpg'},
				],
				site_name: 'SiteName',
			}}
			twitter={{
				handle: '@handle',
				site: '@site',
				cardType: 'summary_large_image',
			}}
		/>
	);
};
