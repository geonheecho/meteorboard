import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Notice } from './Notice';
import { NoticeCollection } from '/imports/db/NoticeCollection';


import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export const NoticeList = () => {
    // 컬렉션에서 데이터들을 찾고 내림차순으로 정렬하라.
    const notice1 = useTracker(() =>

        NoticeCollection.find({}, { sort: { createAt: -1 } }).fetch()
    );
    const deleteNotice = (_id) => {
        if (window.confirm('해당 게시물을 삭제하시겠습니까?\n삭제된 데이터는 복구할 수 없습니다.') == true) {
        } else {
            return;
        }
        Meteor.call('notice.remove', _id);
    }
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell> 번호</TableCell>
                        <TableCell> 카테고리</TableCell>
                        <TableCell> 사전이름</TableCell>
                        <TableCell> 언어</TableCell>
                        <TableCell> 단어수</TableCell>
                        <TableCell> 등록일</TableCell>
                        <TableCell> 동작</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        notice1.map(notice => (<Notice key={notice._id} {...notice} onDeleteClick={deleteNotice} />))
                    }

                </TableBody>
            </Table>
        </div >
    );
}