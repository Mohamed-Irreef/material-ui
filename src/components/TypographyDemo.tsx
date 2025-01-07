import React from 'react'
import { Typography } from '@mui/material'

const TypographyDemo:React.FC = () => {
  return (
    <div>
      <Typography variant="h1"> H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4">H4 Heading</Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h6">H6 Heading</Typography>

      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2" gutterBottom> subtitle2</Typography> {/* gutter bottom - small bottom margin */}

      <Typography variant="body1">Body1</Typography>
      <Typography variant="body2">Body2</Typography>
    </div>
  );
}

export default TypographyDemo