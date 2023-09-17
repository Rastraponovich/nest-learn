import { XMLParser, X2jOptionsOptional } from 'fast-xml-parser';

const options: X2jOptionsOptional = {
  ignoreAttributes: false,
  allowBooleanAttributes: true,
  parseAttributeValue: true,
  parseTagValue: true,
  attributeNamePrefix: '',
  ignoreDeclaration: true,
};

export class MyXMLParser {
  protected parser = new XMLParser(options);
  parse(xml: string): any {
    const result = this.parser.parse(xml);
    return result;
  }
}
