import * as React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Box,
  Stack,
  Avatar,
  Button
} from "@mui/material";
import { MuiChip } from "../../../commonStyle/CommonStyle";
import ViewResultModal from "./ViewResultModal";
import { useNavigate } from "react-router-dom";



export type reviewReportDataType = {
  name: string,
  quantity: string,
  content: string,
  admin: string,
  status: string,
  time: string
}

export default function ReviewReportTableBody(props: any) {
  let navigate = useNavigate();
  const rows: Array<reviewReportDataType> = props.rows;
  return (
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={index} hover={true} className="row-hover">
          <TableCell style={{ width: '17%' }} component="th" scope="row">
            <Stack direction="row" spacing={0}>
              <Avatar />
              <Button
                className="name-detail normal-text"
                variant="text"
              >
                {row.name}
              </Button>
            </Stack>
          </TableCell>
          <TableCell style={{ width: '17%' }}>{row.quantity}</TableCell>
          <TableCell style={{ width: '17%' }}>{row.content}</TableCell>
          <TableCell style={{ width: '17%' }}>{row.admin}</TableCell>
          <TableCell style={{ width: '17%' }}>{row.status}</TableCell>
          <TableCell style={{ width: '17%' }}>{row.time}</TableCell>

          <TableCell align="right">
            <Box className="hidden">
              <ViewResultModal />
            </Box>
          </TableCell>
          <TableCell align="right">
            <Box className="hidden">
              <MuiChip onClick={() => navigate(`/reports/${row.name}`)} label="View report content" />
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
