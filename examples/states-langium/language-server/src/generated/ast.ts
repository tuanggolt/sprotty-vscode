/******************************************************************************
 * This file was generated by langium-cli 0.3.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { AstNode, AstReflection, Reference, isAstNode } from 'langium';

export interface Event extends AstNode {
    readonly $container: StateMachine;
    name: string
}

export const Event = 'Event';

export function isEvent(item: unknown): item is Event {
    return reflection.isInstance(item, Event);
}

export interface State extends AstNode {
    readonly $container: StateMachine;
    name: string
    transitions: Array<Transition>
}

export const State = 'State';

export function isState(item: unknown): item is State {
    return reflection.isInstance(item, State);
}

export interface StateMachine extends AstNode {
    events: Array<Event>
    name: string
    states: Array<State>
}

export const StateMachine = 'StateMachine';

export function isStateMachine(item: unknown): item is StateMachine {
    return reflection.isInstance(item, StateMachine);
}

export interface Transition extends AstNode {
    readonly $container: State;
    event: Reference<Event>
    state: Reference<State>
}

export const Transition = 'Transition';

export function isTransition(item: unknown): item is Transition {
    return reflection.isInstance(item, Transition);
}

export type StatesAstType = 'Event' | 'State' | 'StateMachine' | 'Transition';

export type StatesAstReference = 'Transition:event' | 'Transition:state';

export class StatesAstReflection implements AstReflection {

    getAllTypes(): string[] {
        return ['Event', 'State', 'StateMachine', 'Transition'];
    }

    isInstance(node: unknown, type: string): boolean {
        return isAstNode(node) && this.isSubtype(node.$type, type);
    }

    isSubtype(subtype: string, supertype: string): boolean {
        if (subtype === supertype) {
            return true;
        }
        switch (subtype) {
            default: {
                return false;
            }
        }
    }

    getReferenceType(referenceId: StatesAstReference): string {
        switch (referenceId) {
            case 'Transition:event': {
                return Event;
            }
            case 'Transition:state': {
                return State;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }
}

export const reflection = new StatesAstReflection();