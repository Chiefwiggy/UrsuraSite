
import React from 'react'
import { styled } from '@mui/material/styles';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Tooltip from '@mui/material/Tooltip';



export const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#343434',
      padding: '12px',
      color: 'white',
      maxWidth: 220,
      border: '1px solid #020202',
    },
  }));