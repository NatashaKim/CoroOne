module ApplicationHelper
  def default_meta_tags
    {
      site: 'Coroone-media.com',
      title: 'Coroone-media',
      reverse: true,
      separator: '|',
      description: 'Медиа-сервис для гейм-дизайнеров и геймеров',
      keywords: 'hse, art, design',
      canonical: request.original_url,
      noindex: !Rails.env.production?,
      icon: [
        { href: image_url('favicon.jpg'), rel: 'apple-touch-icon', sizes: '180x180', type: 'image/jpg' },
       ],
      og: {
        site_name: 'Coroone-media.com',
        title: 'Coroone-media',
        description: 'Медиа-сервис для гейм-дизайнеров и геймеров',
        type: 'website',
        url: request.original_url,
        image: image_url('login-page.png')
      }
    }
  end
end
