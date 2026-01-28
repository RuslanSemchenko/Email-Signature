import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function InstructionGuide() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>How to Install Your Signature</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="gmail">
            <AccordionTrigger>Google Gmail</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  In Gmail, click the <strong>Settings</strong> gear icon, then{' '}
                  <strong>See all settings</strong>.
                </li>
                <li>
                  Scroll down to the <strong>Signature</strong> section.
                </li>
                <li>
                  Click <strong>+ Create new</strong>, name your signature, and
                  click <strong>Create</strong>.
                </li>
                <li>
                  Paste your copied signature into the signature box.
                </li>
                <li>
                  Under <strong>Signature defaults</strong>, select your new
                  signature for new emails and/or replies/forwards.
                </li>
                <li>
                  Scroll to the bottom and click <strong>Save Changes</strong>.
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="outlook">
            <AccordionTrigger>Microsoft Outlook (Desktop & Web)</AccordionTrigger>
            <AccordionContent>
              <h4 className="font-semibold mb-2">Outlook on the Web:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm mb-4">
                <li>
                  Click the <strong>Settings</strong> gear icon, then{' '}
                  <strong>View all Outlook settings</strong>.
                </li>
                <li>
                  Go to <strong>Mail</strong> &gt; <strong>Compose and reply</strong>.
                </li>
                <li>
                  Under <strong>Email signature</strong>, click{' '}
                  <strong>+ New signature</strong>.
                </li>
                <li>
                  Name your signature and paste the copied content into the
                  editor.
                </li>
                <li>
                  Select your new signature as the default for new messages and replies.
                </li>
                <li>
                  Click <strong>Save</strong>.
                </li>
              </ol>
               <h4 className="font-semibold mb-2">Outlook Desktop App:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  In a new email, go to <strong>Message</strong> &gt; <strong>Signature</strong> &gt; <strong>Signatures...</strong>
                </li>
                <li>
                  Click <strong>New</strong>, give your signature a name, and click <strong>OK</strong>.
                </li>
                <li>
                  Paste the copied signature into the edit box.
                </li>
                <li>
                  Choose your new signature for <strong>New messages</strong> and <strong>Replies/forwards</strong>.
                </li>
                 <li>
                  Click <strong>OK</strong> to save.
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="apple-mail">
            <AccordionTrigger>Apple Mail (macOS)</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  Open Apple Mail, then go to <strong>Mail</strong> &gt;{' '}
                  <strong>Settings</strong> (or Preferences) from the menu bar.
                </li>
                <li>
                  Click the <strong>Signatures</strong> tab.
                </li>
                <li>Select the email account you want to use the signature with.</li>
                <li>
                  Click the <strong>+</strong> button to create a new signature.
                </li>
                <li>
                  Uncheck the "Always match my default message font" box.
                </li>
                <li>
                  Paste your copied signature into the signature preview panel.
                </li>
                <li>Close the settings window to save. It will save automatically.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
