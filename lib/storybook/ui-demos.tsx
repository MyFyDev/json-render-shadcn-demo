"use client";

import type { ComponentType, ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";

function childContent(args: Record<string, unknown>): ReactNode {
  const value = args.children;
  if (value === undefined || value === null) {
    return undefined;
  }
  return typeof value === "string" ? value : (value as ReactNode);
}

function withoutChildren(args: Record<string, unknown>): Record<string, unknown> {
  const { children: _ignored, ...rest } = args;
  return rest;
}

/**
 * Render a shadcn/ui primitive, optionally inside a composed demo shell.
 *
 * @param demo - Demo template id from {@link storyGroups}
 * @param Component - Target primitive component
 * @param args - Story args including documented props
 */
export function renderUiDemo(
  demo: string,
  Component: ComponentType<Record<string, unknown>>,
  args: Record<string, unknown>,
): ReactNode {
  const children = childContent(args);
  const props = withoutChildren(args);

  if (!demo) {
    return <Component {...props}>{children}</Component>;
  }

  switch (demo) {
    case "card-header":
      return (
        <Card>
          <CardHeader {...props}>{children}</CardHeader>
        </Card>
      );
    case "card-title":
      return (
        <Card>
          <CardHeader>
            <CardTitle {...props}>{children}</CardTitle>
          </CardHeader>
        </Card>
      );
    case "card-description":
      return (
        <Card>
          <CardHeader>
            <CardDescription {...props}>{children}</CardDescription>
          </CardHeader>
        </Card>
      );
    case "card-action":
      return (
        <Card>
          <CardHeader>
            <CardAction {...props}>{children}</CardAction>
          </CardHeader>
        </Card>
      );
    case "card-content":
      return (
        <Card>
          <CardContent {...props}>{children}</CardContent>
        </Card>
      );
    case "card-footer":
      return (
        <Card>
          <CardFooter {...props}>{children}</CardFooter>
        </Card>
      );
    case "accordion-root":
      return (
        <Accordion {...props}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Section</AccordionTrigger>
            <AccordionContent>Body</AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    case "accordion-item":
      return (
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem {...props}>
            <AccordionTrigger>Section</AccordionTrigger>
            <AccordionContent>Body</AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    case "accordion-trigger":
      return (
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger {...props}>{children}</AccordionTrigger>
            <AccordionContent>Body</AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    case "accordion-content":
      return (
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Section</AccordionTrigger>
            <AccordionContent {...props}>{children}</AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    case "alert-root":
      return (
        <Alert {...props}>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
      );
    case "alert-title":
      return (
        <Alert>
          <AlertTitle {...props}>{children}</AlertTitle>
        </Alert>
      );
    case "alert-description":
      return (
        <Alert>
          <AlertDescription {...props}>{children}</AlertDescription>
        </Alert>
      );
    case "avatar-root":
      return (
        <Avatar {...props}>
          <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      );
    case "avatar-image":
      return (
        <Avatar>
          <AvatarImage {...props} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      );
    case "avatar-fallback":
      return (
        <Avatar>
          <AvatarFallback {...props}>{children}</AvatarFallback>
        </Avatar>
      );
    case "button-group-root":
      return (
        <ButtonGroup {...props}>
          <Button>One</Button>
          <Button>Two</Button>
        </ButtonGroup>
      );
    case "carousel-root":
      return (
        <Carousel {...props} className="mx-auto w-full max-w-xs">
          <CarouselContent>
            {[1, 2, 3].map((n) => (
              <CarouselItem key={n}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    {n}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      );
    case "carousel-content":
      return (
        <Carousel className="mx-auto w-full max-w-xs">
          <CarouselContent {...props}>
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  1
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      );
    case "carousel-item":
      return (
        <Carousel className="mx-auto w-full max-w-xs">
          <CarouselContent>
            <CarouselItem {...props}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  Slide
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      );
    case "carousel-previous":
      return (
        <Carousel className="relative mx-auto w-full max-w-xs">
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  1
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious {...props} />
        </Carousel>
      );
    case "carousel-next":
      return (
        <Carousel className="relative mx-auto w-full max-w-xs">
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  1
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext {...props} />
        </Carousel>
      );
    case "collapsible-root":
      return (
        <Collapsible {...props}>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent>Hidden content</CollapsibleContent>
        </Collapsible>
      );
    case "collapsible-trigger":
      return (
        <Collapsible open>
          <CollapsibleTrigger {...props}>{children}</CollapsibleTrigger>
          <CollapsibleContent>Hidden content</CollapsibleContent>
        </Collapsible>
      );
    case "collapsible-content":
      return (
        <Collapsible open>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent {...props}>{children}</CollapsibleContent>
        </Collapsible>
      );
    case "dialog-root":
      return (
        <Dialog {...props}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog</DialogTitle>
              <DialogDescription>Description</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
    case "dialog-trigger":
      return (
        <Dialog>
          <DialogTrigger {...props}>{children}</DialogTrigger>
          <DialogContent>
            <DialogTitle>Dialog</DialogTitle>
          </DialogContent>
        </Dialog>
      );
    case "dialog-content":
      return (
        <Dialog open>
          <DialogContent {...props}>
            <DialogTitle>Dialog</DialogTitle>
          </DialogContent>
        </Dialog>
      );
    case "dialog-header":
      return (
        <Dialog open>
          <DialogContent>
            <DialogHeader {...props}>
              <DialogTitle>Dialog</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
    case "dialog-title":
      return (
        <Dialog open>
          <DialogContent>
            <DialogHeader>
              <DialogTitle {...props}>{children}</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
    case "dialog-description":
      return (
        <Dialog open>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog</DialogTitle>
              <DialogDescription {...props}>{children}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
    case "dialog-footer":
      return (
        <Dialog open>
          <DialogContent>
            <DialogFooter {...props}>{children}</DialogFooter>
          </DialogContent>
        </Dialog>
      );
    case "drawer-root":
      return (
        <Drawer {...props}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer</DrawerTitle>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      );
    case "drawer-content":
      return (
        <Drawer open>
          <DrawerContent {...props}>
            <DrawerTitle>Drawer</DrawerTitle>
          </DrawerContent>
        </Drawer>
      );
    case "drawer-header":
      return (
        <Drawer open>
          <DrawerContent>
            <DrawerHeader {...props}>
              <DrawerTitle>Drawer</DrawerTitle>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      );
    case "drawer-title":
      return (
        <Drawer open>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle {...props}>{children}</DrawerTitle>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      );
    case "dropdown-menu-root":
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    case "dropdown-menu-trigger":
      return (
        <DropdownMenu>
          <DropdownMenuTrigger {...props}>{children}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    case "dropdown-menu-content":
      return (
        <DropdownMenu open>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent {...props}>
            <DropdownMenuItem>Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    case "dropdown-menu-item":
      return (
        <DropdownMenu open>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem {...props}>{children}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    case "pagination-root":
      return (
        <Pagination {...props}>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      );
    case "pagination-content":
      return (
        <Pagination>
          <PaginationContent {...props}>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      );
    case "pagination-item":
      return (
        <Pagination>
          <PaginationContent>
            <PaginationItem {...props}>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      );
    case "pagination-link":
      return (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink {...props}>{children}</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      );
    case "pagination-previous":
      return (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious {...props} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      );
    case "pagination-next":
      return (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationNext {...props} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      );
    case "pagination-ellipsis":
      return (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationEllipsis {...props} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      );
    case "popover-root":
      return (
        <Popover {...props}>
          <PopoverTrigger asChild>
            <Button variant="outline">Open</Button>
          </PopoverTrigger>
          <PopoverContent>Popover content</PopoverContent>
        </Popover>
      );
    case "popover-trigger":
      return (
        <Popover>
          <PopoverTrigger {...props}>{children}</PopoverTrigger>
          <PopoverContent>Popover content</PopoverContent>
        </Popover>
      );
    case "popover-content":
      return (
        <Popover open>
          <PopoverTrigger asChild>
            <Button variant="outline">Open</Button>
          </PopoverTrigger>
          <PopoverContent {...props}>{children}</PopoverContent>
        </Popover>
      );
    case "radio-group-root":
      return (
        <RadioGroup {...props}>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="a" id="a" />
            <Label htmlFor="a">Option A</Label>
          </div>
        </RadioGroup>
      );
    case "radio-group-item":
      return (
        <RadioGroup defaultValue="a">
          <div className="flex items-center gap-2">
            <RadioGroupItem {...props} id="demo-radio" />
            <Label htmlFor="demo-radio">Option</Label>
          </div>
        </RadioGroup>
      );
    case "select-root":
      return (
        <Select {...props}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Pick a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectContent>
        </Select>
      );
    case "select-trigger":
      return (
        <Select defaultValue="apple">
          <SelectTrigger {...props}>
            <SelectValue placeholder="Pick" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
          </SelectContent>
        </Select>
      );
    case "select-content":
      return (
        <Select open>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Pick" />
          </SelectTrigger>
          <SelectContent {...props}>
            <SelectItem value="apple">Apple</SelectItem>
          </SelectContent>
        </Select>
      );
    case "select-item":
      return (
        <Select open>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Pick" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem {...props}>{children}</SelectItem>
          </SelectContent>
        </Select>
      );
    case "slider-root":
      return <Component {...props} className="w-64" />;
    case "table-root":
      return (
        <Table {...props}>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Row</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
    case "table-header":
      return (
        <Table>
          <TableHeader {...props}>
            <TableRow>
              <TableHead>Column</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      );
    case "table-body":
      return (
        <Table>
          <TableBody {...props}>
            <TableRow>
              <TableCell>Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
    case "table-row":
      return (
        <Table>
          <TableBody>
            <TableRow {...props}>
              <TableCell>Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
    case "table-head":
      return (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead {...props}>{children}</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      );
    case "table-cell":
      return (
        <Table>
          <TableBody>
            <TableRow>
              <TableCell {...props}>{children}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
    case "tabs-root":
      return (
        <Tabs {...props}>
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Panel 1</TabsContent>
        </Tabs>
      );
    case "tabs-list":
      return (
        <Tabs defaultValue="tab1">
          <TabsList {...props}>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
        </Tabs>
      );
    case "tabs-trigger":
      return (
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger {...props}>{children}</TabsTrigger>
          </TabsList>
        </Tabs>
      );
    case "tabs-content":
      return (
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent {...props}>{children}</TabsContent>
        </Tabs>
      );
    case "toggle-group-root":
      return (
        <ToggleGroup {...props}>
          <ToggleGroupItem value="a">A</ToggleGroupItem>
          <ToggleGroupItem value="b">B</ToggleGroupItem>
        </ToggleGroup>
      );
    case "toggle-group-item":
      return (
        <ToggleGroup type="single" defaultValue="a">
          <ToggleGroupItem {...props}>{children}</ToggleGroupItem>
        </ToggleGroup>
      );
    case "tooltip-root":
      return (
        <Tooltip {...props}>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover</Button>
          </TooltipTrigger>
          <TooltipContent>Tooltip</TooltipContent>
        </Tooltip>
      );
    case "tooltip-trigger":
      return (
        <Tooltip>
          <TooltipTrigger {...props}>{children}</TooltipTrigger>
          <TooltipContent>Tooltip</TooltipContent>
        </Tooltip>
      );
    case "tooltip-content":
      return (
        <Tooltip open>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover</Button>
          </TooltipTrigger>
          <TooltipContent {...props}>{children}</TooltipContent>
        </Tooltip>
      );
    default:
      return <Component {...props}>{children}</Component>;
  }
}
