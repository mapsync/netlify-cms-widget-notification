import './bootstrap.js'
import CMS, { init } from 'netlify-cms'
import 'netlify-cms/dist/cms.css'
import { Control, Preview } from '../src'

const config = {
  backend: {
    name: 'test-repo',
    login: false,
  },
  media_folder: 'assets',
  collections: [{
    name: 'notification',
    label: 'Notification',
    editor: {
      preview: false
    },
    create: true,
    folder: "_notifications",
    fields: [
      {
        name: "title",
        label: "Title",
        widget: "string"
      },
      {
        label: "Priority",
        name: "priority",
        widget: "select",
        default: "normal",
        options: ["normal", "high"]
      },
      {
        label: "Sound",
        name: "sound",
        widget: "boolean",
        default: false
      },
      {
        name: "message",
        label: "Message",
        widget: "text"
      },
      {
        name: "link",
        label: "Link",
        widget: "string"
      },
      {
        name: "send",
        label: "Send",
        widget: "notification"
      }
    ]
  }],
}

CMS.registerWidget('notification', Control, Preview)

init({ config })
