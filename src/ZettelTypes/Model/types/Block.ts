export type Block<T extends Block.Type = Block.Type> = {
  [Block.Type.Paragraph]: Block.Paragraph
  [Block.Type.Header]: Block.Header
  [Block.Type.Quote]: Block.Quote
  [Block.Type.Code]: Block.Code
  [Block.Type.ListItem]: Block.ListItem
  [Block.Type.Task]: Block.Task
  [Block.Type.Attachment]: Block.Attachment
}[T]

export namespace Block {
  export enum Type {
    Paragraph = 'PARAGRAPH',
    Header = 'HEADER',
    Quote = 'QUOTE',
    Code = 'CODE',
    ListItem = 'LIST_ITEM',
    Task = 'TASK',
    Attachment = 'ATTACHMENT',
  }

  export interface Base {
    readonly type: Type
    readonly id: string
  }

  export interface Paragraph extends Base {
    readonly type: Type.Paragraph
    readonly styledText: StyledText
  }

  export interface Header extends Base {
    readonly type: Type.Header
    readonly styledText: StyledText
    readonly level: 1 | 2 | 3 | 4 | 5 | 6
  }

  export interface Quote extends Base {
    readonly type: Type.Quote
    readonly innerId: string
    readonly styledText: StyledText
  }

  export interface Code extends Base {
    readonly type: Type.Code
    readonly text: string
    readonly programmingLanguage: string | null
    readonly caption: string | null
  }

  export interface ListItem extends Base {
    readonly type: Type.ListItem
    readonly innerId: string
    readonly styledText: StyledText
    readonly ordered: boolean
  }

  export interface Task extends Base {
    readonly type: Type.Task
    readonly innerId: string
    readonly styledText: StyledText
    readonly dueDate: number | null
    readonly isChecked: boolean
    readonly checkedByUserId: string | null
    readonly checkedAt: number | null
  }

  export interface Attachment extends Base {
    readonly type: Type.Attachment
    readonly name: string | null
    readonly files: readonly Attachment.File[]
  }

  export namespace Attachment {
    export interface File {
      readonly id: string
      readonly name: string
      readonly mimeType: string
      readonly size: number
    }
  }

  export interface StyledText {
    readonly text: string
    readonly styleGroups: readonly StyledText.StyleGroup[]
    readonly annotations: readonly StyledText.Annotation[]
  }

  export namespace StyledText {
    export interface StyleGroup {
      readonly from: number
      readonly to: number
      readonly styles: readonly Style[]
    }

    export type Style<T extends Style.Type = Style.Type> = {
      [Style.Type.Strong]: Style.Strong
      [Style.Type.Emphasis]: Style.Emphasis
      [Style.Type.Code]: Style.Code
      [Style.Type.LineThrough]: Style.LineThrough
      [Style.Type.UnderLine]: Style.UnderLine
    }[T]

    export namespace Style {
      export enum Type {
        Strong = 'STRONG',
        Emphasis = 'EMPHASIS',
        Code = 'CODE',
        LineThrough = 'LINE_THROUGH',
        UnderLine = 'UNDER_LINE',
      }

      export interface Base {
        readonly type: Type
      }

      export interface Strong extends Base {
        readonly type: Type.Strong
      }

      export interface Emphasis extends Base {
        readonly type: Type.Emphasis
      }

      export interface Code extends Base {
        readonly type: Type.Code
      }

      export interface LineThrough extends Base {
        readonly type: Type.LineThrough
      }

      export interface UnderLine extends Base {
        readonly type: Type.UnderLine
      }
    }

    export type Annotation<T extends Annotation.Type = Annotation.Type> = {
      [Annotation.Type.HyperLink]: Annotation.HyperLink
      [Annotation.Type.PlainLink]: Annotation.PlainLink
      [Annotation.Type.ReferencedUser]: Annotation.ReferencedUser
      [Annotation.Type.ReferencedCard]: Annotation.ReferencedCard
      [Annotation.Type.ReferencedPage]: Annotation.ReferencedPage
    }[T]

    export namespace Annotation {
      export enum Type {
        HyperLink = 'HYPER_LINK',
        PlainLink = 'PLAIN_LINK',
        ReferencedUser = 'REFERENCED_USER',
        ReferencedCard = 'REFERENCED_CARD',
        ReferencedPage = 'REFERENCED_PAGE',
      }

      export interface Base {
        readonly type: Type
        readonly id: string
        readonly from: number
        readonly to: number
      }

      export interface HyperLink extends Base {
        readonly type: Type.HyperLink
        readonly url: string
      }

      export interface PlainLink extends Base {
        readonly type: Type.PlainLink
        readonly url: string
      }

      export interface ReferencedUser extends Base {
        readonly type: Type.ReferencedUser
        readonly referencedUserId: string
      }

      export interface ReferencedCard extends Base {
        readonly type: Type.ReferencedCard
        readonly referencedCardId: string
      }

      export interface ReferencedPage extends Base {
        readonly type: Type.ReferencedPage
        readonly referencedPageId: string
      }
    }
  }
}
