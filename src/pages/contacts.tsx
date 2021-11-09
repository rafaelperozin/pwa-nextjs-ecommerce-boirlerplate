import {AppLayout} from '@app/components/Layout/AppLayout';
import {useRouter} from 'next/router';
import React, {ReactElement} from 'react';

const ContactsPage = () => {
	const {isFallback} = useRouter();
	return isFallback ? <p>Loading...</p> : <p>Welcome to the contact page!</p>;
};

ContactsPage.getLayout = (page: ReactElement) => {
	return <AppLayout>{page}</AppLayout>;
};

export default ContactsPage;