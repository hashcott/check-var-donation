import React from 'react';
import { useInfiniteHits, Highlight } from 'react-instantsearch';

import {
    Table,
    Thead,
    Tbody,
    Button,
    Tr,
    Th,
    Td,
    TableContainer,
    Container,
    Heading,
} from '@chakra-ui/react';
import { i } from 'framer-motion/client';

export function CustomInfiniteHits(props) {
    const { items, showMore, isLastPage } = useInfiniteHits(props);
    if (!items) {
        return null;
    }

    return (
        <Container
            display={'flex'}
            maxW="1080px"
            padding="20px"
            flexDirection={'column'}
            gap={10}
            alignItems={'center'}
        >
            {items && items.length > 0 && (
                <Heading as="h2">Kết quả tìm kiếm:</Heading>
            )}

            <TableContainer whiteSpace={'wrap'}>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>STT</Th>
                            <Th>Ngày giờ</Th>
                            <Th>Nội dung</Th>
                            <Th>Số tiền</Th>
                            <Th>Tên đối ứng</Th>
                        </Tr>
                    </Thead>
                    <Tbody widthTbody="100%">
                        {items
                            .filter((a) => a.description)
                            .map((hit) => (
                                <Tr key={hit.id}>
                                    <Td>{hit.id}</Td>
                                    <Td>{hit.date}</Td>
                                    <Td>
                                        <Highlight
                                            attribute="description"
                                            hit={hit}
                                        />
                                    </Td>
                                    <Td>{hit.credit}đ</Td>

                                    <Td>
                                        <Highlight
                                            attribute="author"
                                            hit={hit}
                                        />
                                    </Td>
                                </Tr>
                            ))}
                    </Tbody>
                </Table>
            </TableContainer>
            <Button onClick={showMore} disabled={isLastPage}>
                Xem thêm
            </Button>
        </Container>
    );
}
