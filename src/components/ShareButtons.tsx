'use client';

import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  RedditShareButton,
  TelegramShareButton,
  WeiboShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  RedditIcon,
  TelegramIcon,
  WeiboIcon
} from 'react-share';

interface ShareButtonsProps {
  url: string;
  title: string;
  description: string;
  className?: string;
  iconSize?: number;
  round?: boolean;
}

export default function ShareButtons({
  url = 'https://repomod.com',
  title = 'REPO MOD - Modifications for REPO',
  description = 'REPO MOD enhances the REPO cooperative horror game with additional features, improvements and customization options for a better gameplay experience.',
  className = '',
  iconSize = 32,
  round = true
}: ShareButtonsProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <FacebookShareButton url={url} hashtag="#REPOgame">
        <FacebookIcon size={iconSize} round={round} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={iconSize} round={round} />
      </TwitterShareButton>

      <LinkedinShareButton url={url} title={title} summary={description}>
        <LinkedinIcon size={iconSize} round={round} />
      </LinkedinShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={iconSize} round={round} />
      </WhatsappShareButton>

      <RedditShareButton url={url} title={title}>
        <RedditIcon size={iconSize} round={round} />
      </RedditShareButton>

      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={iconSize} round={round} />
      </TelegramShareButton>

      <WeiboShareButton url={url} title={title}>
        <WeiboIcon size={iconSize} round={round} />
      </WeiboShareButton>
    </div>
  );
} 