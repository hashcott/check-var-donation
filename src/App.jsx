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
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

import 'instantsearch.css/themes/satellite.css';
import './index.css';
const { searchClient } = instantMeiliSearch(
    'https://meilisearch-on-koyeb-happytechhub.koyeb.app',
    'a63d8ad54deda9ba045d5fac8296991103b918d03865e6fe40c0b7866ba80ea0',
    {
        attributesToHighlight: ['*'],
        highlightPreTag: '<b>',
        highlightPostTag: '</b>',
    }
);

const App = () => (
    <Container maxW="1080px" padding="20px">
        <Heading lineHeight="tall">CHECK VAR ỦNG HỘ</Heading>
        <Heading lineHeight="tall">
            <Highlight
                query="LIÊM"
                styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
            >
                Tìm ra "LIÊM"
            </Highlight>
        </Heading>

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
        <InstantSearch indexName="vietinbank" searchClient={searchClient}>
            <SearchBox />
            <CustomInfiniteHits />
        </InstantSearch>
    </Container>
);

export default App;
