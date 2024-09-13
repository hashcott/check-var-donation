import React from 'react';
import { InstantSearch, SearchBox } from 'react-instantsearch';
import { CustomInfiniteHits } from './Custom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import {
    Container,
    Heading,
    Highlight,
    List,
    ListItem,
    ListIcon,
    Text,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

import 'instantsearch.css/themes/satellite.css';
import './index.css';
const { searchClient } = instantMeiliSearch(
    'https://meilisearch-on-koyeb-happytechhub.koyeb.app',
    '7c41c8093cc6af37667a5f6f0a036f772e5a0dbc6ab2eab6638a132d8c7542e4',
    {
        attributesToHighlight: ['*'],
        highlightPreTag: '<b>',
        highlightPostTag: '</b>',
    }
);

const App = () => (
    <Container maxW="1080px" padding="20px">
        <Heading lineHeight="tall"> 👮 CHECK VAR ỦNG HỘ</Heading>
        <Heading lineHeight="tall">
            <Highlight
                query="LIÊM"
                styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
            >
                Truy tìm anh "LIÊM"
            </Highlight>
        </Heading>
        <Text paddingTop={5} fontSize="md">
            Made by:{' '}
            <a href="https://github.com/hashcott/check-var-donation">
                <Highlight
                    query="Nguyen Hanh"
                    styles={{
                        px: '2',
                        py: '1',
                        rounded: 'full',
                        bg: 'pink.100',
                    }}
                >
                    Nguyen Hanh with ❤
                </Highlight>
            </a>
        </Text>
        <List paddingBottom={10} spacing={3}>
            <Heading paddingTop={10} as="h5" size="sm">
                Dữ liệu được cập nhật liên tục từ:
            </Heading>
            <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <a href="https://www.facebook.com/share/p/mD6BaRcwn9BWdtiK/">
                    Sao kê Mặt Trận Tổ Quốc Vietcombank 0011001932418 -
                    01/09/2024 - 10/09/2024
                </a>
            </ListItem>
            <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <a href="https://www.facebook.com/share/p/UysXGt7yiJbXm5vs/">
                    Sao kê Mặt Trận Tổ Quốc Vietinbank CT1111 - 10/09/2024 -
                    12/09/2024
                </a>
            </ListItem>
        </List>
        <InstantSearch indexName="data" searchClient={searchClient}>
            <SearchBox />
            <CustomInfiniteHits />
        </InstantSearch>
    </Container>
);

export default App;
