import {GetStaticPaths, GetStaticProps} from 'next';
import {ParsedUrlQuery} from 'querystring';
import {useRouter} from 'next/router';
import LoadingBlogPage from 'components/Loading/LoadingBlogPage';
import React, {ReactElement} from 'react';
import {DefaultLayout} from 'components/Layout/Default/Layout';
import {BlogCategorySeo} from 'pages/blog/[categoryUrlKey]/_seo.config';

export interface BlogCategoryPageParams extends ParsedUrlQuery {
	categoryUrlKey: string;
}

export interface BlogCategoryPagePaths {
	params: BlogCategoryPageParams;
}

const topCateforyUrlKey: string[] = ['testing', 'bacon'];

export const getStaticPaths: GetStaticPaths = async () => {
	const paths: BlogCategoryPagePaths[] = topCateforyUrlKey.map((categoryUrlKey: string) => ({
		params: {
			categoryUrlKey,
		},
	}));
	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const {categoryUrlKey} = context.params as BlogCategoryPageParams;
	const revalidationTime = Number(process.env.NEXT_PUBLIC_DEFAULT_DATA_REVALIDATION_TIME);
	const category = topCateforyUrlKey.includes(categoryUrlKey); // get from API

	if (!category) return {notFound: true};

	return {
		props: {
			categoryUrlKey,
		},
		revalidate: revalidationTime,
	};
};

const BlogCategoryPage = ({categoryUrlKey}: BlogCategoryPageParams) => {
	const {isFallback} = useRouter();
	return isFallback ? (
		<LoadingBlogPage />
	) : (
		<>
			<h1>Hello world!</h1>
			<p>Blog Category URL Key: {categoryUrlKey}</p>
			<BlogCategorySeo />
		</>
	);
};

BlogCategoryPage.getLayout = (page: ReactElement) => {
	return <DefaultLayout>{page}</DefaultLayout>;
};

export default BlogCategoryPage;
