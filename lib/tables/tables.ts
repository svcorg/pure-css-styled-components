import { css } from 'styled-components';

export const pureTable = css`
  /* Remove spacing between table cells (from Normalize.css) */
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #cbcbcb;
`;

export const pureTableCaption = css`
  color: #000;
  /* font: italic 85%/1 arial, sans-serif; */
  padding: 1em 0;
  text-align: center;
`;

export const tableCell = css`
  border-left: 1px solid #cbcbcb; /*  inner column border */
  border-width: 0 0 0 1px;
  font-size: inherit;
  margin: 0;
  overflow: visible; /*to make ths where the title is really long work*/
  padding: 0.5em 1em; /* cell padding */
`;

export const PureTableHead = css`
  background-color: #e0e0e0;
  color: #000;
  text-align: left;
  vertical-align: bottom;
`;

/*
striping:
   even - #fff (white)
   odd  - #f2f2f2 (light gray)
*/
export const pureTableOddCell = css`
  background-color: #f2f2f2;
`;

export const pureTableEvenCell = css`
  background-color: transparent;
`;

/* nth-child selector for modern browsers */
/* .pure-table-striped tr:nth-child(2n-1) td {
    background-color: #f2f2f2;
} */

/* BORDERED TABLES */
/* .pure-table-bordered td {
    border-bottom: 1px solid #cbcbcb;
}
.pure-table-bordered tbody > tr:last-child > td {
    border-bottom-width: 0;
} */

/* HORIZONTAL BORDERED TABLES */

/* .pure-table-horizontal td,
.pure-table-horizontal th {
    border-width: 0 0 1px 0;
    border-bottom: 1px solid #cbcbcb;
}
.pure-table-horizontal tbody > tr:last-child > td {
    border-bottom-width: 0;
} */
